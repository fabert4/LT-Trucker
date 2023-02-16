import type { PackagingTypeModel, PlanningViewModel } from '$lib/generated';
import { openDB, type DBSchema } from 'idb';
import { get, writable } from 'svelte/store';

const planningDatabase = await openDB<PlanningDatabase>('Plannings', 1, {
    upgrade(db) {
        if (db.objectStoreNames.contains('planning')) {
            db.deleteObjectStore('planning');
        }
        db.createObjectStore('planning');
    }
});

const emballageDatabase = await openDB<EmballageDatabase>('Emballage', 1, {
    upgrade(db) {
        if (db.objectStoreNames.contains('emballage')) {
            db.deleteObjectStore('emballage');
        }
        db.createObjectStore('emballage');
    }
});

let initialized = false;
export const plannings = planningStore();
export const changelogs = changelogStore();
export const emballage = emballageStore();

export async function initializeStores() {
    await Promise.all([plannings.init(), emballage.init()]);
    initialized = true;
}

function planningStore() {
    const store = writable<PlanningVersion[]>([]);
    const { subscribe, update, set } = store;
    return {
        subscribe,
        init: async () => {
            if (!initialized) {
                set(await getPlannings());
            }
        },
        remove: (p: PlanningVersion) =>
            update((list) => {
                const current = list.findIndex((c) => c.plannings.planning.id === p.plannings.planning.id);
                if (current >= 0) {
                    list.splice(current, current + 1);
                }
                removePlanning(p);
                return list;
            }),
        put: (p: PlanningVersion) =>
            update((list) => {
                const current = list.findIndex((c) => c.plannings.planning.id === p.plannings.planning.id);
                if (current >= 0) {
                    list.splice(current, current + 1);
                }
                putPlanning(p);
                return list.concat([p]);
            })
    };
}

function changelogStore() {
    const { subscribe, set, update } = writable<Changelog[]>([]);
    return {
        subscribe,
        set,
        enqueue: (log: Changelog) =>
            update((list) => {
                list.push(log);
                return list;
            }),
        dequeue: () =>
            update((list) => {
                list.splice(0, 1);
                return list;
            })
    };
}

function emballageStore() {
    const { subscribe, set } = writable<PackagingTypeModel[]>([]);
    return {
        subscribe,
        init: async () => {
            if (!initialized) set(await getEmballageTypes());
        },
        set: (emballage: PackagingTypeModel[]) => {
            putEmballageTypes(emballage).then(() => {
                getEmballageTypes().then((e) => set(e));
            });
        }
    };
}

export interface Changelog {
    title: string;
    date: Date | undefined;
    changelog: string[];
}

export interface PlanningVersion {
    plannings: PlanningViewModel;
    backend: string | undefined;
}

interface PlanningDatabase extends DBSchema {
    planning: {
        key: number;
        value: PlanningVersion;
    };
}

interface EmballageDatabase extends DBSchema {
    emballage: {
        key: number;
        value: PackagingTypeModel;
    };
}

async function getPlanning(id: number): Promise<PlanningVersion | undefined> {
    return planningDatabase.get('planning', id);
}

async function getPlannings(): Promise<PlanningVersion[]> {
    return planningDatabase.getAll('planning');
}

async function putPlanning(job: PlanningVersion) {
    planningDatabase.put('planning', job, job.plannings.planning.id);
}

async function removePlanning(job: PlanningVersion) {
    planningDatabase.delete('planning', job.plannings.planning.id);
}

async function getEmballageTypes(): Promise<PackagingTypeModel[]> {
    return (await emballageDatabase.getAll('emballage')).sort((a, b) => (a.order > b.order ? 1 : -1));
}

async function putEmballageTypes(emballage: PackagingTypeModel[]) {
    await emballageDatabase.clear('emballage');
    const promises = emballage.map((e) => {
        emballageDatabase.put('emballage', e, e.id);
    });
    Promise.all(promises);
}
