/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MapStringInt } from './MapStringInt';
import type { ReportFinished } from './ReportFinished';

export type ReportModel = {
    ecmr?: (null | MapStringInt);
    emailCount: number;
    importedConversionsCount: number;
    planning: ReportFinished;
    shipment: ReportFinished;
    smsCount: number;
    users: number;
};

