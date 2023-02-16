/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressUpdateModel } from './AddressUpdateModel';
import type { PersonUpdateModel } from './PersonUpdateModel';
import type { RawDate } from './RawDate';
import type { StatusRequirementCreateModel } from './StatusRequirementCreateModel';
import type { StatusUpdateModel } from './StatusUpdateModel';

export type ActionUpdateModel = {
    address: AddressUpdateModel;
    eta?: (null | RawDate);
    etd?: (null | RawDate);
    id: number;
    identifier?: (null | string);
    instructions?: (null | string);
    person?: (null | PersonUpdateModel);
    requirements?: (null | Array<StatusRequirementCreateModel>);
    status?: (null | StatusUpdateModel);
};

