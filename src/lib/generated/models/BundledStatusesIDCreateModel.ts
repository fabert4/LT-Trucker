/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentCreateModel } from './DocumentCreateModel';
import type { StatusIDCreateModel } from './StatusIDCreateModel';

export type BundledStatusesIDCreateModel = {
    documents: Array<DocumentCreateModel>;
    statusCreateModels: Array<StatusIDCreateModel>;
};

