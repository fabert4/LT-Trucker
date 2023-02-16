/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Period } from './Period';
import type { Sort } from './Sort';

export type Pagination = {
    itemsPerPage: number;
    page: number;
    period?: (null | Period);
    search?: (null | string);
    sort?: (null | Sort);
};

