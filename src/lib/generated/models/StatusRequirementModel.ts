/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StatusRequirementModel = {
    global: boolean;
    level: StatusRequirementModel.level;
    requirement: StatusRequirementModel.requirement;
    text?: (null | string);
};

export namespace StatusRequirementModel {

    export enum level {
        OPTIONAL = 'OPTIONAL',
        REQUIRED = 'REQUIRED',
        REQUIRED_IF_NOT_ACCEPTED = 'REQUIRED_IF_NOT_ACCEPTED',
        REQUIRED_IF_DAMAGED = 'REQUIRED_IF_DAMAGED',
    }

    export enum requirement {
        ARRIVAL = 'ARRIVAL',
        IMAGE = 'IMAGE',
        DOCUMENT = 'DOCUMENT',
        MESSAGE = 'MESSAGE',
        SCAN = 'SCAN',
        SIGNATURE = 'SIGNATURE',
        MODIFY_SHELVES_EXTENSIONS = 'MODIFY_SHELVES_EXTENSIONS',
        FINISH_PLANNING = 'FINISH_PLANNING',
        ACTIVITY_STARTED = 'ACTIVITY_STARTED',
        TEMPERATURE = 'TEMPERATURE',
        MANUAL_ACCEPT_CHECK = 'MANUAL_ACCEPT_CHECK',
        SPECIFY_DECLINED_STATE = 'SPECIFY_DECLINED_STATE',
        EMBALLAGE_DELIVERED = 'EMBALLAGE_DELIVERED',
        EMBALLAGE_PICKED_UP = 'EMBALLAGE_PICKED_UP',
        MODIFY_CONTAINER_QUANTITIES = 'MODIFY_CONTAINER_QUANTITIES',
        EMBALLAGE = 'EMBALLAGE',
    }


}

