/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawDate } from './RawDate';

export type ListAccessCodeModel = {
    created: RawDate;
    description?: (null | string);
    id: number;
    secret: string;
    validTill?: (null | RawDate);
};

