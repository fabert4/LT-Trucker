/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundledStatusCreateModel } from './BundledStatusCreateModel';

export type StatusIDCreateModel = {
    consignment: string;
    expeditor: number;
    shipment: string;
    status: BundledStatusCreateModel;
};

