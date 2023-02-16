/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityView } from './ActivityView';
import type { ShipmentView } from './ShipmentView';

export type StopView = {
    activities: Array<ActivityView>;
    description: Array<string>;
    id: number;
    info: Array<string>;
    navigation: boolean;
    shipment?: (null | string);
    shipments: Array<ShipmentView>;
    subtitle: Array<string>;
    timeframe: boolean;
    title: string;
    type: boolean;
};

