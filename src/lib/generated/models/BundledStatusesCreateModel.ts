/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentCreateModel } from './DocumentCreateModel';
import type { StatusCreate } from './StatusCreate';

export type BundledStatusesCreateModel = {
    documents: Array<DocumentCreateModel>;
    statusCreateModels: Array<StatusCreate>;
};

