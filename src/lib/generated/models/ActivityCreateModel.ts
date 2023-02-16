/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusRequirementCreateModel } from './StatusRequirementCreateModel';

export type ActivityCreateModel = {
    action: ActivityCreateModel.action;
    identifier?: (null | string);
    requirements: Array<StatusRequirementCreateModel>;
    shipmentExpeditor?: (null | number);
    shipmentIdentifier?: (null | string);
    statusType: ActivityCreateModel.statusType;
};

export namespace ActivityCreateModel {

    export enum action {
        LOAD = 'LOAD',
        UNLOAD = 'UNLOAD',
        ATTACH = 'ATTACH',
        DETACH = 'DETACH',
    }

    export enum statusType {
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

