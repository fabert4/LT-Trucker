/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanningModel } from './PlanningModel';
import type { RawDate } from './RawDate';

export type AccessCodePlanningModel = {
    description?: (null | string);
    entity: PlanningModel;
    id: number;
    secret: string;
    validTill?: (null | RawDate);
};

