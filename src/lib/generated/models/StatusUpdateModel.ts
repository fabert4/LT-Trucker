/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionUpdateModel } from './DimensionUpdateModel';
import type { DocumentUpdateModel } from './DocumentUpdateModel';
import type { HandoverCreateModel } from './HandoverCreateModel';
import type { MapStringIntInput } from './MapStringIntInput';
import type { MapStringStringInput } from './MapStringStringInput';
import type { PersonUpdateModel } from './PersonUpdateModel';
import type { PlanningDataCreateModel } from './PlanningDataCreateModel';

export type StatusUpdateModel = (null | {
    deliveredEmballage?: (null | MapStringIntInput);
    dimensions: Array<DimensionUpdateModel>;
    documents?: (null | Array<DocumentUpdateModel>);
    handover: HandoverCreateModel;
    id: number;
    identifier: string;
    location?: (null | string);
    message?: (null | string);
    mutations?: (null | MapStringStringInput);
    person?: (null | PersonUpdateModel);
    pickedUpEmballage?: (null | MapStringIntInput);
    planningData?: (null | PlanningDataCreateModel);
    state: StatusUpdateModel.state;
    type: StatusUpdateModel.type;
});

export namespace StatusUpdateModel {

    export enum state {
        ACCEPTED = 'ACCEPTED',
        DECLINED = 'DECLINED',
        DAMAGED = 'DAMAGED',
        MANCO = 'MANCO',
        NOT_READY = 'NOT_READY',
    }

    export enum type {
        PICKUP = 'PICKUP',
        DELIVERY = 'DELIVERY',
        CROSSDOCK_PICKUP = 'CROSSDOCK_PICKUP',
        CROSSDOCK_DELIVERY = 'CROSSDOCK_DELIVERY',
        PICKUP_STARTED = 'PICKUP_STARTED',
        DELIVERY_STARTED = 'DELIVERY_STARTED',
        CROSSDOCK_PICKUP_STARTED = 'CROSSDOCK_PICKUP_STARTED',
        CROSSDOCK_DELIVERY_STARTED = 'CROSSDOCK_DELIVERY_STARTED',
        ON_ROUTE = 'ON_ROUTE',
        PICKUP_STARTED_CANCELED = 'PICKUP_STARTED_CANCELED',
        DELIVERY_STARTED_CANCELED = 'DELIVERY_STARTED_CANCELED',
        CROSSDOCK_PICKUP_STARTED_CANCELED = 'CROSSDOCK_PICKUP_STARTED_CANCELED',
        CROSSDOCK_DELIVERY_STARTED_CANCELED = 'CROSSDOCK_DELIVERY_STARTED_CANCELED',
        DOCK_ASSIGNED = 'DOCK_ASSIGNED',
        UPDATE_ACCEPTED = 'UPDATE_ACCEPTED',
        PLANNING_PROCESSED = 'PLANNING_PROCESSED',
    }


}

