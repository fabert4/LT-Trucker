/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';

export type UserModel = {
    authorities: Array<'ADMIN' | 'USER' | 'SHIPMENT' | 'TRANSPORT' | 'COMPANY' | 'TRIGGER' | 'ACCESS_CODE'>;
    email: Email;
    id: number;
    locked: boolean;
};

