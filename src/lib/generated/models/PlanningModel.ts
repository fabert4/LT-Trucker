/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsignmentModel } from './ConsignmentModel';
import type { RawDate } from './RawDate';
import type { StopModel } from './StopModel';
import type { UserModel } from './UserModel';
import type { VehicleModel } from './VehicleModel';

export type PlanningModel = {
    consignments: Array<ConsignmentModel>;
    created: RawDate;
    description?: (null | string);
    finished: boolean;
    id: number;
    identifier?: (null | string);
    instructions?: (null | string);
    name?: (null | string);
    sharedAt?: (null | RawDate);
    startDate?: (null | RawDate);
    stops: Array<StopModel>;
    updated?: (null | RawDate);
    user?: (null | UserModel);
    vehicles: Array<VehicleModel>;
};

