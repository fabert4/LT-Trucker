/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StopView } from './StopView';

export type PlanningView = {
    description: Array<string>;
    id: number;
    startDate: boolean;
    stops: Array<StopView>;
    subtitle: Array<string>;
    title: string;
    updated: boolean;
};

