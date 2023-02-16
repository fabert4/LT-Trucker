/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionModel } from './DimensionModel';
import type { ItemModel } from './ItemModel';
import type { MoneyModel } from './MoneyModel';

export type PacketModel = {
    description?: (null | string);
    dimensions?: (null | Array<DimensionModel>);
    id: number;
    identifier?: (null | string);
    items: Array<ItemModel>;
    monetary?: (null | MoneyModel);
    quantity?: (null | number);
};

