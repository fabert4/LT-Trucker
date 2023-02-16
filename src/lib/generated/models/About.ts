/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { URL } from './URL';

export type About = {
    actor: number;
    backend: string;
    country?: (null | string);
    domain: URL;
    ecmr: boolean;
    environment: About.environment;
    schema: string;
    wallet?: (null | string);
};

export namespace About {

    export enum environment {
        DEV = 'DEV',
        TEST = 'TEST',
        ACCEPT = 'ACCEPT',
        PROD = 'PROD',
    }


}

