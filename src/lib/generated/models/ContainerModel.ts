/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerTypeModel } from './ContainerTypeModel';
import type { DimensionModel } from './DimensionModel';
import type { MapStringString } from './MapStringString';
import type { PacketModel } from './PacketModel';

export type ContainerModel = {
    barcode?: (null | string);
    dimensions?: (null | Array<DimensionModel>);
    id: number;
    identifier?: (null | string);
    packets: Array<PacketModel>;
    properties?: (null | MapStringString);
    quantity?: (null | number);
    type?: (null | ContainerTypeModel);
};

