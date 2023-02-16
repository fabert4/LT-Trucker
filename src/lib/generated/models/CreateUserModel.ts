/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { NewPassword } from './NewPassword';

export type CreateUserModel = {
    authorities: Array<'ADMIN' | 'USER' | 'SHIPMENT' | 'TRANSPORT' | 'COMPANY' | 'TRIGGER' | 'ACCESS_CODE'>;
    email: Email;
    locked: boolean;
    password: NewPassword;
};

