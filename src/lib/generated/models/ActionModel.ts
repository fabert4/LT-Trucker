/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModel } from './AddressModel';
import type { PersonModel } from './PersonModel';
import type { RawDate } from './RawDate';
import type { StatusModel } from './StatusModel';
import type { StatusRequirementModel } from './StatusRequirementModel';

export type ActionModel = {
    address: AddressModel;
    eta?: (null | RawDate);
    etd?: (null | RawDate);
    id: number;
    identifier?: (null | string);
    instructions?: (null | string);
    person?: (null | PersonModel);
    requirements?: (null | Array<StatusRequirementModel>);
    status?: (null | StatusModel);
};

