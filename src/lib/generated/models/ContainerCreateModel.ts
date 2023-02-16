/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerTypeCreateModel } from './ContainerTypeCreateModel';
import type { DimensionCreateModel } from './DimensionCreateModel';
import type { MapStringStringInput } from './MapStringStringInput';
import type { PacketCreateModel } from './PacketCreateModel';

export type ContainerCreateModel = {
    barcode?: (null | string);
    dimensions?: (null | Array<DimensionCreateModel>);
    identifier?: (null | string);
    packets: Array<PacketCreateModel>;
    properties?: (null | MapStringStringInput);
    quantity?: (null | number);
    type?: (null | ContainerTypeCreateModel);
};

