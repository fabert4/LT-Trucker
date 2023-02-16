/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VehicleModel = {
    description?: (null | string);
    id: number;
    licensePlate?: (null | string);
    type: VehicleModel.type;
};

export namespace VehicleModel {

    export enum type {
        TRUCK = 'TRUCK',
        TRAILER = 'TRAILER',
    }


}

