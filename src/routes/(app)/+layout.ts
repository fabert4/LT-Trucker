import { DefaultService } from '$lib/generated';
import { authorize } from '$lib/utils/Api';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
    // authorize(url);
    // return {
    //     authenticated: await DefaultService.getAuthenticateduser(),
    //     system: await DefaultService.getGetabout(),
    //     jobs: await DefaultService.getListselfplanningsupdatedat(),
    //     emballage: await DefaultService.getListpackagingtypes()
    // };
};
