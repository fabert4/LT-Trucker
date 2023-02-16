/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentModel = {
    base64: string;
    id: number;
    meta?: (null | string);
    mime: string;
    name: string;
    type: DocumentModel.type;
};

export namespace DocumentModel {

    export enum type {
        IMAGE = 'IMAGE',
        DOCUMENT = 'DOCUMENT',
        SIGNATURE = 'SIGNATURE',
        E_CMR = 'eCMR',
        VAGD = 'VAGD',
    }


}

