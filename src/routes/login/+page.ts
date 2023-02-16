import {DefaultService} from "../../lib/generated";
import {authorize} from "../../lib/utils/Api";
import type {PageLoad} from "../../../.svelte-kit/types/src/routes/login/$types";

export const load: PageLoad = async ({url}) => {
    authorize(url);
    return {
        health: await DefaultService.getGethealth()
    };
};
