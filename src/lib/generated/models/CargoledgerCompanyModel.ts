/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';
import type { PersonModel } from './PersonModel';
import type { URL } from './URL';

export type CargoledgerCompanyModel = {
    address: AddressModel;
    cargoledger: URL;
    id: number;
    name: string;
    person?: (null | PersonModel);
};

