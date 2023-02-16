/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressCreateModel } from './AddressCreateModel';
import type { PersonCreateModel } from './PersonCreateModel';

export type ShipmentCompanyCreateModel = {
    actorId: string;
    address: AddressCreateModel;
    cargoledger?: (null | number);
    name: string;
    person?: (null | PersonCreateModel);
    shared?: (null | string);
};

