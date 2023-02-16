/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionUpdateModel } from './ActionUpdateModel';
import type { MoneyUpdateModel } from './MoneyUpdateModel';
import type { ProgressUpdateModel } from './ProgressUpdateModel';
import type { ShipmentCompanyUpdateModel } from './ShipmentCompanyUpdateModel';

export type ActorUpdateModel = {
    company: ShipmentCompanyUpdateModel;
    delivery: ActionUpdateModel;
    id: number;
    pickup: ActionUpdateModel;
    price?: (null | MoneyUpdateModel);
    progresses?: (null | Array<ProgressUpdateModel>);
};

