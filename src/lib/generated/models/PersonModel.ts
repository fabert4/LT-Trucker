/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';

export type PersonModel = (null | {
    email?: (null | Email);
    id: number;
    message?: (null | string);
    name?: (null | string);
    phone?: (null | string);
});

