/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressCreateModel } from './AddressCreateModel';
import type { PersonCreateModel } from './PersonCreateModel';
import type { RawDate } from './RawDate';
import type { StatusCreateModel } from './StatusCreateModel';
import type { StatusRequirementCreateModel } from './StatusRequirementCreateModel';

export type ActionCreateModel = {
    address: AddressCreateModel;
    eta?: (null | RawDate);
    etd?: (null | RawDate);
    identifier?: (null | string);
    instructions?: (null | string);
    person?: (null | PersonCreateModel);
    requirements?: (null | Array<StatusRequirementCreateModel>);
    status?: (null | StatusCreateModel);
};

