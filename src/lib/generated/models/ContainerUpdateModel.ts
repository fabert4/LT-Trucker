/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerTypeCreateModel } from './ContainerTypeCreateModel';
import type { DimensionUpdateModel } from './DimensionUpdateModel';
import type { MapStringStringInput } from './MapStringStringInput';
import type { PacketUpdateModel } from './PacketUpdateModel';

export type ContainerUpdateModel = {
    barcode?: (null | string);
    dimensions?: (null | Array<DimensionUpdateModel>);
    id: number;
    identifier?: (null | string);
    packets: Array<PacketUpdateModel>;
    properties?: (null | MapStringStringInput);
    quantity?: (null | number);
    type?: (null | ContainerTypeCreateModel);
};

