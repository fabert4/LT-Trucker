// @ts-nocheck
import { DefaultService } from '$lib/generated';
import { authorize } from '$lib/utils/Api';
import type { LayoutLoad } from './$types';

export const load = async ({ url }: Parameters<LayoutLoad>[0]) => {
    // authorize(url);
    // return {
    //     authenticated: await DefaultService.getAuthenticateduser(),
    //     system: await DefaultService.getGetabout(),
    //     jobs: await DefaultService.getListselfplanningsupdatedat(),
    //     emballage: await DefaultService.getListpackagingtypes()
    // };
};
