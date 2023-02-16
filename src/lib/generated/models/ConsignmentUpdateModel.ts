/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActorUpdateModel } from './ActorUpdateModel';
import type { ContainerUpdateModel } from './ContainerUpdateModel';
import type { DocumentUpdateModel } from './DocumentUpdateModel';
import type { ShipmentCompanyUpdateModel } from './ShipmentCompanyUpdateModel';

export type ConsignmentUpdateModel = {
    actors: Array<ActorUpdateModel>;
    containers: Array<ContainerUpdateModel>;
    customs?: (null | string);
    documents?: (null | Array<DocumentUpdateModel>);
    id: number;
    incoterms?: (null | string);
    indicators?: (null | Array<string>);
    name: string;
    receiver: ShipmentCompanyUpdateModel;
    references?: (null | Array<string>);
    sender: ShipmentCompanyUpdateModel;
};

