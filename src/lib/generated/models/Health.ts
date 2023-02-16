/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DatabaseHealth } from './DatabaseHealth';

export type Health = {
    backend: string;
    database: DatabaseHealth;
    host: string;
};

