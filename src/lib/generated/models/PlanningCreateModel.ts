/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { NotifyParty } from './NotifyParty';
import type { RawDate } from './RawDate';
import type { StopCreateModel } from './StopCreateModel';
import type { VehicleCreateModel } from './VehicleCreateModel';

export type PlanningCreateModel = {
    description?: (null | string);
    identifier?: (null | string);
    instructions?: (null | string);
    name?: (null | string);
    notifyParties: Array<NotifyParty>;
    startDate?: (null | RawDate);
    stops: Array<StopCreateModel>;
    user?: (null | Email);
    vehicles?: Array<VehicleCreateModel>;
};

