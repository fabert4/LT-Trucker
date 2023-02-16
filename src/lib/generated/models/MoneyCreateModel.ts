/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawDate } from './RawDate';

export type MoneyCreateModel = (null | {
    amount: number;
    currency: MoneyCreateModel.currency;
    date: RawDate;
});

export namespace MoneyCreateModel {

    export enum currency {
        EURO = 'EURO',
        DOLLAR = 'DOLLAR',
        SWISS_FRANC = 'SWISS_FRANC',
    }


}

