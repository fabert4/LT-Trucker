/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActorModel } from './ActorModel';
import type { ContainerModel } from './ContainerModel';
import type { DocumentModel } from './DocumentModel';
import type { ShipmentCompanyModel } from './ShipmentCompanyModel';
import type { ShipmentModel } from './ShipmentModel';

export type ConsignmentModel = {
    actors: Array<ActorModel>;
    containers: Array<ContainerModel>;
    customs?: (null | string);
    documents?: (null | Array<DocumentModel>);
    id: number;
    incoterms?: (null | string);
    indicators?: (null | Array<string>);
    name: string;
    receiver: ShipmentCompanyModel;
    references?: (null | Array<string>);
    sender: ShipmentCompanyModel;
    shipment?: (null | ShipmentModel);
};

