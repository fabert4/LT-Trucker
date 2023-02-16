/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityCreateModel } from './ActivityCreateModel';
import type { AddressCreateModel } from './AddressCreateModel';
import type { RawDate } from './RawDate';

export type StopCreateModel = {
    activities: Array<ActivityCreateModel>;
    address: AddressCreateModel;
    eta?: (null | RawDate);
    etd?: (null | RawDate);
    identifier?: (null | string);
    instructions?: (null | Array<string>);
};

