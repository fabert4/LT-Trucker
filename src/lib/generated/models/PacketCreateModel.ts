/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionCreateModel } from './DimensionCreateModel';
import type { ItemCreateModel } from './ItemCreateModel';
import type { MoneyCreateModel } from './MoneyCreateModel';

export type PacketCreateModel = {
    description?: (null | string);
    dimensions?: (null | Array<DimensionCreateModel>);
    identifier?: (null | string);
    items: Array<ItemCreateModel>;
    monetary?: (null | MoneyCreateModel);
    quantity?: (null | number);
};

