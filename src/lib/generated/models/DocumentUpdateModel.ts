/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentUpdateModel = {
    base64: string;
    id: number;
    meta?: (null | string);
    mime: string;
    name: string;
    type: DocumentUpdateModel.type;
};

export namespace DocumentUpdateModel {

    export enum type {
        IMAGE = 'IMAGE',
        DOCUMENT = 'DOCUMENT',
        SIGNATURE = 'SIGNATURE',
        E_CMR = 'eCMR',
        VAGD = 'VAGD',
    }


}

