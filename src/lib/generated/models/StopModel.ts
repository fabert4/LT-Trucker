/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityModel } from './ActivityModel';
import type { AddressModel } from './AddressModel';
import type { RawDate } from './RawDate';

export type StopModel = {
    activities: Array<ActivityModel>;
    address: AddressModel;
    eta?: (null | RawDate);
    etd?: (null | RawDate);
    id: number;
    identifier?: (null | string);
    instructions?: (null | Array<string>);
};

