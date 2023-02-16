/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionModel } from './ActionModel';
import type { ConsignmentModel } from './ConsignmentModel';
import type { MoneyModel } from './MoneyModel';
import type { ProgressModel } from './ProgressModel';
import type { ShipmentCompanyModel } from './ShipmentCompanyModel';

export type ActorModel = {
    company: ShipmentCompanyModel;
    consignment?: (null | ConsignmentModel);
    delivery: ActionModel;
    id: number;
    pickup: ActionModel;
    price?: (null | MoneyModel);
    progresses?: (null | Array<ProgressModel>);
};

