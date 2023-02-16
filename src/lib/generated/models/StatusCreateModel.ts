/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionCreateModel } from './DimensionCreateModel';
import type { DocumentCreateModel } from './DocumentCreateModel';
import type { HandoverCreateModel } from './HandoverCreateModel';
import type { MapStringIntInput } from './MapStringIntInput';
import type { MapStringStringInput } from './MapStringStringInput';
import type { PersonCreateModel } from './PersonCreateModel';
import type { PlanningDataCreateModel } from './PlanningDataCreateModel';

export type StatusCreateModel = (null | {
    deliveredEmballage?: (null | MapStringIntInput);
    dimensions: Array<DimensionCreateModel>;
    documents?: (null | Array<DocumentCreateModel>);
    handover: HandoverCreateModel;
    identifier: string;
    location?: (null | string);
    message?: (null | string);
    mutations?: (null | MapStringStringInput);
    person?: (null | PersonCreateModel);
    pickedUpEmballage?: (null | MapStringIntInput);
    planningData?: (null | PlanningDataCreateModel);
    state: StatusCreateModel.state;
    type: StatusCreateModel.type;
});

export namespace StatusCreateModel {

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

