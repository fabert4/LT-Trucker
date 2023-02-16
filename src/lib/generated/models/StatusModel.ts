/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionModel } from './DimensionModel';
import type { DocumentModel } from './DocumentModel';
import type { HandoverModel } from './HandoverModel';
import type { MapStringInt } from './MapStringInt';
import type { MapStringString } from './MapStringString';
import type { PersonModel } from './PersonModel';
import type { PlanningDataModel } from './PlanningDataModel';
import type { RawDate } from './RawDate';

export type StatusModel = (null | {
    created: RawDate;
    deliveredEmballage?: (null | MapStringInt);
    dimensions: Array<DimensionModel>;
    documents?: (null | Array<DocumentModel>);
    handover: HandoverModel;
    id: number;
    identifier: string;
    location?: (null | string);
    message?: (null | string);
    mutations?: (null | MapStringString);
    person?: (null | PersonModel);
    pickedUpEmballage?: (null | MapStringInt);
    planningData?: (null | PlanningDataModel);
    state: StatusModel.state;
    type: StatusModel.type;
});

export namespace StatusModel {

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

