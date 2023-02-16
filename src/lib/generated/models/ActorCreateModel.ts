/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionCreateModel } from './ActionCreateModel';
import type { MoneyCreateModel } from './MoneyCreateModel';
import type { ProgressCreateModel } from './ProgressCreateModel';
import type { ShipmentCompanyCreateModel } from './ShipmentCompanyCreateModel';

export type ActorCreateModel = {
    company: ShipmentCompanyCreateModel;
    delivery: ActionCreateModel;
    pickup: ActionCreateModel;
    price?: (null | MoneyCreateModel);
    progresses?: (null | Array<ProgressCreateModel>);
};

