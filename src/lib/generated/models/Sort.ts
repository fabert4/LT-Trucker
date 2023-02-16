/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Sort = (null | {
    by: string;
    order: Sort.order;
});

export namespace Sort {

    export enum order {
        ASC = 'ASC',
        DESC = 'DESC',
    }


}

