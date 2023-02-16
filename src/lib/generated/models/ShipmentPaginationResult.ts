/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CargoledgerCompanyModel } from './CargoledgerCompanyModel';
import type { ConsignmentModel } from './ConsignmentModel';
import type { DocumentModel } from './DocumentModel';
import type { RawDate } from './RawDate';

export type ShipmentPaginationResult = {
    items: Array<(null | {
        actorId: string;
        ata?: (null | RawDate);
        consignments: Array<ConsignmentModel>;
        created: RawDate;
        documents: Array<DocumentModel>;
        eta?: (null | RawDate);
        expeditor: CargoledgerCompanyModel;
        finished: boolean;
        id: number;
        identifier: string;
        name: string;
        updated?: (null | RawDate);
    })>;
    total: number;
};

