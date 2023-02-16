/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawDate } from './RawDate';

export type MoneyUpdateModel = (null | {
    amount: number;
    currency: MoneyUpdateModel.currency;
    date: RawDate;
    id: number;
});

export namespace MoneyUpdateModel {

    export enum currency {
        EURO = 'EURO',
        DOLLAR = 'DOLLAR',
        SWISS_FRANC = 'SWISS_FRANC',
    }


}

