// @ts-nocheck
import {DefaultService} from "../../lib/generated";
import {authorize} from "../../lib/utils/Api";
import type {PageLoad} from "../../../.svelte-kit/types/src/routes/login/$types";

export const load = async ({url}: Parameters<PageLoad>[0]) => {
    authorize(url);
    return {
        health: await DefaultService.getGethealth()
    };
};
