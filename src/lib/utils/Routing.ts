import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';

export function updateParam(params: URLSearchParams, key: string, value: string | undefined) {
    updateParams(setParam(params, key, value));
}

export function setParam(
    params: URLSearchParams,
    key: string,
    value: string | undefined
): URLSearchParams {
    if (value != undefined) {
        params.set(key, value);
    } else {
        params.delete(key);
    }
    return params;
}

export function updateParams(params: URLSearchParams) {
    goto(`?${params.toString()}`, { invalidateAll: true });
}

export function backUrl(url: URL): string {
    const path = url.pathname.split('/');
    path.pop();
    return path.join('/') || '/jobs';
}

export function back() {
    goto(backUrl(get(page).url));
}
