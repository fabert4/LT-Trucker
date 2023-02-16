/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessCodeNotificationCreate = {
    medium: AccessCodeNotificationCreate.medium;
    message?: (null | string);
    recipient: string;
};

export namespace AccessCodeNotificationCreate {

    export enum medium {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
    }


}

