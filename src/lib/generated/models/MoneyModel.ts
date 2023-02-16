/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawDate } from './RawDate';

export type MoneyModel = (null | {
    amount: number;
    currency: MoneyModel.currency;
    date: RawDate;
    id: number;
});

export namespace MoneyModel {

    export enum currency {
        EURO = 'EURO',
        DOLLAR = 'DOLLAR',
        SWISS_FRANC = 'SWISS_FRANC',
    }


}

