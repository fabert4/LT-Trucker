/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionUpdateModel } from './DimensionUpdateModel';
import type { ItemUpdateModel } from './ItemUpdateModel';
import type { MoneyUpdateModel } from './MoneyUpdateModel';

export type PacketUpdateModel = {
    description?: (null | string);
    dimensions?: (null | Array<DimensionUpdateModel>);
    id: number;
    identifier?: (null | string);
    items: Array<ItemUpdateModel>;
    monetary?: (null | MoneyUpdateModel);
    quantity?: (null | number);
};

