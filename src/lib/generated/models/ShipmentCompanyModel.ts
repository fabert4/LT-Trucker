/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';
import type { PersonModel } from './PersonModel';

export type ShipmentCompanyModel = {
    actorId: string;
    address: AddressModel;
    cargoledger?: (null | number);
    id: number;
    name: string;
    person?: (null | PersonModel);
    shared?: (null | string);
};

