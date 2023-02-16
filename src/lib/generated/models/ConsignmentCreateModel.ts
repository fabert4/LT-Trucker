/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActorCreateModel } from './ActorCreateModel';
import type { ContainerCreateModel } from './ContainerCreateModel';
import type { DocumentCreateModel } from './DocumentCreateModel';
import type { ShipmentCompanyCreateModel } from './ShipmentCompanyCreateModel';

export type ConsignmentCreateModel = {
    actors: Array<ActorCreateModel>;
    containers: Array<ContainerCreateModel>;
    customs?: (null | string);
    documents?: (null | Array<DocumentCreateModel>);
    incoterms?: (null | string);
    indicators?: (null | Array<string>);
    name: string;
    receiver: ShipmentCompanyCreateModel;
    references?: (null | Array<string>);
    sender: ShipmentCompanyCreateModel;
};

