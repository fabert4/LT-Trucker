/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawDate } from './RawDate';
import type { UserModel } from './UserModel';

export type MessageModel = {
    consignment?: (null | string);
    created: RawDate;
    id: number;
    message?: (null | string);
    planning?: (null | string);
    shipment?: (null | string);
    type: MessageModel.type;
    user?: (null | UserModel);
};

export namespace MessageModel {

    export enum type {
        SHIPMENT_CREATED = 'SHIPMENT_CREATED',
        SHIPMENT_UPDATED = 'SHIPMENT_UPDATED',
        PLANNING_CREATED = 'PLANNING_CREATED',
        PLANNING_UPDATED = 'PLANNING_UPDATED',
        ACCESS_CODE_CREATED = 'ACCESS_CODE_CREATED',
        PART_OF_ACCESS_CODE_CREATED = 'PART_OF_ACCESS_CODE_CREATED',
        ECMR = 'ECMR',
        NOTIFICATION_SENT = 'NOTIFICATION_SENT',
        EXCISE = 'EXCISE',
        ACCESS_CODE_SHARED = 'ACCESS_CODE_SHARED',
        PART_OF_ACCESS_CODE_SHARED = 'PART_OF_ACCESS_CODE_SHARED',
    }


}

