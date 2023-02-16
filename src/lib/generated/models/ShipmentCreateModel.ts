/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsignmentCreateModel } from './ConsignmentCreateModel';
import type { DocumentCreateModel } from './DocumentCreateModel';

export type ShipmentCreateModel = {
    actorId: string;
    consignments: Array<ConsignmentCreateModel>;
    documents: Array<DocumentCreateModel>;
    expeditor: number;
    identifier: string;
    name: string;
};

