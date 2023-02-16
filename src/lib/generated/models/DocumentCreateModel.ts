/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentCreateModel = {
    base64: string;
    meta?: (null | string);
    mime: string;
    name: string;
    type: DocumentCreateModel.type;
};

export namespace DocumentCreateModel {

    export enum type {
        IMAGE = 'IMAGE',
        DOCUMENT = 'DOCUMENT',
        SIGNATURE = 'SIGNATURE',
        E_CMR = 'eCMR',
        VAGD = 'VAGD',
    }


}

