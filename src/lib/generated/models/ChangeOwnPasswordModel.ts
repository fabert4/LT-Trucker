/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NewPassword } from './NewPassword';
import type { Password } from './Password';

export type ChangeOwnPasswordModel = {
    current: Password;
    password: NewPassword;
};

