/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotifyParty = {
    medium: NotifyParty.medium;
    recipient: string;
};

export namespace NotifyParty {

    export enum medium {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
    }


}

