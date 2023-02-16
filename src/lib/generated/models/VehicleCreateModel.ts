/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VehicleCreateModel = {
    description?: (null | string);
    licensePlate?: (null | string);
    type: VehicleCreateModel.type;
};

export namespace VehicleCreateModel {

    export enum type {
        TRUCK = 'TRUCK',
        TRAILER = 'TRAILER',
    }


}

