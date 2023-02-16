/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressUpdateModel } from './AddressUpdateModel';
import type { PersonUpdateModel } from './PersonUpdateModel';

export type ShipmentCompanyUpdateModel = {
    actorId: string;
    address: AddressUpdateModel;
    cargoledger?: (null | number);
    id: number;
    name: string;
    person?: (null | PersonUpdateModel);
    shared?: (null | string);
};

