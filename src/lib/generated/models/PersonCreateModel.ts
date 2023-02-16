/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';

export type PersonCreateModel = (null | {
    email?: (null | Email);
    message?: (null | string);
    name?: (null | string);
    phone?: (null | string);
});

