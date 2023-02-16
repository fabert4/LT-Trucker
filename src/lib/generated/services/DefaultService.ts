/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { About } from '../models/About';
import type { AccessCodePlanningModel } from '../models/AccessCodePlanningModel';
import type { AccessCodePlanningPaginationResult } from '../models/AccessCodePlanningPaginationResult';
import type { Boolean } from '../models/Boolean';
import type { ConsignmentModel } from '../models/ConsignmentModel';
import type { Health } from '../models/Health';
import type { Int } from '../models/Int';
import type { List_PackagingTypeModel } from '../models/List_PackagingTypeModel';
import type { List_PlanningUpdatedAtModel } from '../models/List_PlanningUpdatedAtModel';
import type { MessagePaginationResult } from '../models/MessagePaginationResult';
import type { PlanningModel } from '../models/PlanningModel';
import type { PlanningPaginationResult } from '../models/PlanningPaginationResult';
import type { PlanningViewModel } from '../models/PlanningViewModel';
import type { ReportModel } from '../models/ReportModel';
import type { RestA1_BundledStatusesCreateModel } from '../models/RestA1_BundledStatusesCreateModel';
import type { RestA1_BundledStatusesIDCreateModel } from '../models/RestA1_BundledStatusesIDCreateModel';
import type { RestA1_ChangeOwnPasswordModel } from '../models/RestA1_ChangeOwnPasswordModel';
import type { RestA1_ChangePasswordModel } from '../models/RestA1_ChangePasswordModel';
import type { RestA1_ConsignmentUpdateModel } from '../models/RestA1_ConsignmentUpdateModel';
import type { RestA1_CreateAccessCodePlanningModel } from '../models/RestA1_CreateAccessCodePlanningModel';
import type { RestA1_CreateUserModel } from '../models/RestA1_CreateUserModel';
import type { RestA1_Email } from '../models/RestA1_Email';
import type { RestA1_GenericImport } from '../models/RestA1_GenericImport';
import type { RestA1_Int } from '../models/RestA1_Int';
import type { RestA1_LoginUserModel } from '../models/RestA1_LoginUserModel';
import type { RestA1_Pagination } from '../models/RestA1_Pagination';
import type { RestA1_ShipmentCreateModel } from '../models/RestA1_ShipmentCreateModel';
import type { RestA1_String } from '../models/RestA1_String';
import type { RestA1_UpdateUserModel } from '../models/RestA1_UpdateUserModel';
import type { RestA2_Int_String } from '../models/RestA2_Int_String';
import type { RestA2_Pagination_Boolean } from '../models/RestA2_Pagination_Boolean';
import type { RestA2_Pagination_Int } from '../models/RestA2_Pagination_Int';
import type { RestA2_PlanningCreateModel_Boolean } from '../models/RestA2_PlanningCreateModel_Boolean';
import type { RestA2_UUID_AccessCodeNotificationCreate } from '../models/RestA2_UUID_AccessCodeNotificationCreate';
import type { ShipmentModel } from '../models/ShipmentModel';
import type { ShipmentPaginationResult } from '../models/ShipmentPaginationResult';
import type { String } from '../models/String';
import type { UserModel } from '../models/UserModel';
import type { UserPaginationResult } from '../models/UserPaginationResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * GetHealth
     * GetHealth
     * @returns Health GetHealth
     * @throws ApiError
     */
    public static getGethealth(): CancelablePromise<Health> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gethealth',
        });
    }

    /**
     * UpdateUser
     * UpdateUser
     * @param requestBody UpdateUser
     * @returns UserModel UpdateUser
     * @throws ApiError
     */
    public static postUpdateuser(
        requestBody: RestA1_UpdateUserModel,
    ): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/updateuser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetPlanning
     * GetPlanning
     * @param requestBody GetPlanning
     * @returns PlanningModel GetPlanning
     * @throws ApiError
     */
    public static postGetplanning(
        requestBody: RestA1_Int,
    ): CancelablePromise<PlanningModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getplanning',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetSelfPlanning
     * GetSelfPlanning
     * @param requestBody GetSelfPlanning
     * @returns PlanningViewModel GetSelfPlanning
     * @throws ApiError
     */
    public static postGetselfplanning(
        requestBody: RestA1_Int,
    ): CancelablePromise<PlanningViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getselfplanning',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * DeleteFirebaseToken
     * DeleteFirebaseToken
     * @param requestBody DeleteFirebaseToken
     * @returns Boolean DeleteFirebaseToken
     * @throws ApiError
     */
    public static postDeletefirebasetoken(
        requestBody: RestA1_String,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deletefirebasetoken',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateUser
     * CreateUser
     * @param requestBody CreateUser
     * @returns UserModel CreateUser
     * @throws ApiError
     */
    public static postCreateuser(
        requestBody: RestA1_CreateUserModel,
    ): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createuser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ImportShipment
     * ImportShipment
     * @param requestBody ImportShipment
     * @returns Int ImportShipment
     * @throws ApiError
     */
    public static postImportshipment(
        requestBody: RestA1_ShipmentCreateModel,
    ): CancelablePromise<Int> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/importshipment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListPackagingTypes
     * ListPackagingTypes
     * @returns List_PackagingTypeModel ListPackagingTypes
     * @throws ApiError
     */
    public static getListpackagingtypes(): CancelablePromise<List_PackagingTypeModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/listpackagingtypes',
        });
    }

    /**
     * CreateStatusesAccessCode
     * CreateStatusesAccessCode
     * @param requestBody CreateStatusesAccessCode
     * @returns Boolean CreateStatusesAccessCode
     * @throws ApiError
     */
    public static postCreatestatusesaccesscode(
        requestBody: RestA1_BundledStatusesCreateModel,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createstatusesaccesscode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ChangePassword
     * ChangePassword
     * @param requestBody ChangePassword
     * @returns UserModel ChangePassword
     * @throws ApiError
     */
    public static postChangepassword(
        requestBody: RestA1_ChangePasswordModel,
    ): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/changepassword',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetAbout
     * GetAbout
     * @returns About GetAbout
     * @throws ApiError
     */
    public static getGetabout(): CancelablePromise<About> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/getabout',
        });
    }

    /**
     * SetPlanningLicensePlate
     * SetPlanningLicensePlate
     * @param requestBody SetPlanningLicensePlate
     * @returns PlanningModel SetPlanningLicensePlate
     * @throws ApiError
     */
    public static postSetplanninglicenseplate(
        requestBody: RestA2_Int_String,
    ): CancelablePromise<PlanningModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/setplanninglicenseplate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GraphqlCreator
     * GraphqlCreator
     * @param requestBody GraphqlCreator
     * @returns Boolean GraphqlCreator
     * @throws ApiError
     */
    public static postGraphqlcreator(
        requestBody: RestA1_GenericImport,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/graphqlcreator',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListAccessCodes
     * ListAccessCodes
     * @param requestBody ListAccessCodes
     * @returns AccessCodePlanningPaginationResult ListAccessCodes
     * @throws ApiError
     */
    public static postListaccesscodes(
        requestBody: RestA2_Pagination_Int,
    ): CancelablePromise<AccessCodePlanningPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listaccesscodes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListAllShipments
     * ListAllShipments
     * @param requestBody ListAllShipments
     * @returns ShipmentPaginationResult ListAllShipments
     * @throws ApiError
     */
    public static postListallshipments(
        requestBody: RestA1_Pagination,
    ): CancelablePromise<ShipmentPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listallshipments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * DriverFinishedPlanningAccessCode
     * DriverFinishedPlanningAccessCode
     * @returns Boolean DriverFinishedPlanningAccessCode
     * @throws ApiError
     */
    public static getDriverfinishedplanningaccesscode(): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/driverfinishedplanningaccesscode',
        });
    }

    /**
     * GetShipment
     * GetShipment
     * @param requestBody GetShipment
     * @returns ShipmentModel GetShipment
     * @throws ApiError
     */
    public static postGetshipment(
        requestBody: RestA1_Int,
    ): CancelablePromise<ShipmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getshipment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * DeleteUser
     * DeleteUser
     * @param requestBody DeleteUser
     * @returns Boolean DeleteUser
     * @throws ApiError
     */
    public static postDeleteuser(
        requestBody: RestA1_Int,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deleteuser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * UpdateConsignment
     * UpdateConsignment
     * @param requestBody UpdateConsignment
     * @returns ConsignmentModel UpdateConsignment
     * @throws ApiError
     */
    public static postUpdateconsignment(
        requestBody: RestA1_ConsignmentUpdateModel,
    ): CancelablePromise<ConsignmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/updateconsignment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetSelfPlanningsAccessCode
     * GetSelfPlanningsAccessCode
     * @returns PlanningViewModel GetSelfPlanningsAccessCode
     * @throws ApiError
     */
    public static getGetselfplanningsaccesscode(): CancelablePromise<PlanningViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/getselfplanningsaccesscode',
        });
    }

    /**
     * CreateIDStatusesAccessCode
     * CreateIDStatusesAccessCode
     * @param requestBody CreateIDStatusesAccessCode
     * @returns Boolean CreateIDStatusesAccessCode
     * @throws ApiError
     */
    public static postCreateidstatusesaccesscode(
        requestBody: RestA1_BundledStatusesIDCreateModel,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createidstatusesaccesscode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListUsers
     * ListUsers
     * @param requestBody ListUsers
     * @returns UserPaginationResult ListUsers
     * @throws ApiError
     */
    public static postListusers(
        requestBody: RestA1_Pagination,
    ): CancelablePromise<UserPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listusers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetConsignmentAccessCode
     * GetConsignmentAccessCode
     * @param requestBody GetConsignmentAccessCode
     * @returns ConsignmentModel GetConsignmentAccessCode
     * @throws ApiError
     */
    public static postGetconsignmentaccesscode(
        requestBody: RestA1_Int,
    ): CancelablePromise<ConsignmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getconsignmentaccesscode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateAccessCodeNotification
     * CreateAccessCodeNotification
     * @param requestBody CreateAccessCodeNotification
     * @returns Boolean CreateAccessCodeNotification
     * @throws ApiError
     */
    public static postCreateaccesscodenotification(
        requestBody: RestA2_UUID_AccessCodeNotificationCreate,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createaccesscodenotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListPlannings
     * ListPlannings
     * @param requestBody ListPlannings
     * @returns PlanningPaginationResult ListPlannings
     * @throws ApiError
     */
    public static postListplannings(
        requestBody: RestA2_Pagination_Boolean,
    ): CancelablePromise<PlanningPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listplannings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * RenewMessage
     * RenewMessage
     * @param requestBody RenewMessage
     * @returns Boolean RenewMessage
     * @throws ApiError
     */
    public static postRenewmessage(
        requestBody: RestA1_Int,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/renewmessage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetPlanningByStop
     * GetPlanningByStop
     * @param requestBody GetPlanningByStop
     * @returns PlanningModel GetPlanningByStop
     * @throws ApiError
     */
    public static postGetplanningbystop(
        requestBody: RestA1_Int,
    ): CancelablePromise<PlanningModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getplanningbystop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateAccessCode
     * CreateAccessCode
     * @param requestBody CreateAccessCode
     * @returns AccessCodePlanningModel CreateAccessCode
     * @throws ApiError
     */
    public static postCreateaccesscode(
        requestBody: RestA1_CreateAccessCodePlanningModel,
    ): CancelablePromise<AccessCodePlanningModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createaccesscode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ChangeOwnPassword
     * ChangeOwnPassword
     * @param requestBody ChangeOwnPassword
     * @returns UserModel ChangeOwnPassword
     * @throws ApiError
     */
    public static postChangeownpassword(
        requestBody: RestA1_ChangeOwnPasswordModel,
    ): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/changeownpassword',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * UpdateFirebaseToken
     * UpdateFirebaseToken
     * @param requestBody UpdateFirebaseToken
     * @returns Boolean UpdateFirebaseToken
     * @throws ApiError
     */
    public static postUpdatefirebasetoken(
        requestBody: RestA1_String,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/updatefirebasetoken',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ImportStatus
     * ImportStatus
     * @param requestBody ImportStatus
     * @returns Boolean ImportStatus
     * @throws ApiError
     */
    public static postImportstatus(
        requestBody: RestA1_BundledStatusesIDCreateModel,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/importstatus',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * LoginUser
     * LoginUser
     * @param requestBody LoginUser
     * @returns String LoginUser
     * @throws ApiError
     */
    public static postLoginuser(
        requestBody: RestA1_LoginUserModel,
    ): CancelablePromise<String> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/loginuser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListMessages
     * ListMessages
     * @param requestBody ListMessages
     * @returns MessagePaginationResult ListMessages
     * @throws ApiError
     */
    public static postListmessages(
        requestBody: RestA1_Pagination,
    ): CancelablePromise<MessagePaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listmessages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetConsignment
     * GetConsignment
     * @param requestBody GetConsignment
     * @returns ConsignmentModel GetConsignment
     * @throws ApiError
     */
    public static postGetconsignment(
        requestBody: RestA1_Int,
    ): CancelablePromise<ConsignmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getconsignment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListSelfPlanningsUpdatedAt
     * ListSelfPlanningsUpdatedAt
     * @returns List_PlanningUpdatedAtModel ListSelfPlanningsUpdatedAt
     * @throws ApiError
     */
    public static getListselfplanningsupdatedat(): CancelablePromise<List_PlanningUpdatedAtModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/listselfplanningsupdatedat',
        });
    }

    /**
     * CreateUpdateShipment
     * CreateUpdateShipment
     * @param requestBody CreateUpdateShipment
     * @returns ShipmentModel CreateUpdateShipment
     * @throws ApiError
     */
    public static postCreateupdateshipment(
        requestBody: RestA1_ShipmentCreateModel,
    ): CancelablePromise<ShipmentModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createupdateshipment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * GetUser
     * GetUser
     * @param requestBody GetUser
     * @returns UserModel GetUser
     * @throws ApiError
     */
    public static postGetuser(
        requestBody: RestA1_Int,
    ): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getuser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListShipments
     * ListShipments
     * @param requestBody ListShipments
     * @returns ShipmentPaginationResult ListShipments
     * @throws ApiError
     */
    public static postListshipments(
        requestBody: RestA2_Pagination_Boolean,
    ): CancelablePromise<ShipmentPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listshipments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * DriverFinishedPlanning
     * DriverFinishedPlanning
     * @param requestBody DriverFinishedPlanning
     * @returns Boolean DriverFinishedPlanning
     * @throws ApiError
     */
    public static postDriverfinishedplanning(
        requestBody: RestA1_Int,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/driverfinishedplanning',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateStatuses
     * CreateStatuses
     * @param requestBody CreateStatuses
     * @returns Boolean CreateStatuses
     * @throws ApiError
     */
    public static postCreatestatuses(
        requestBody: RestA1_BundledStatusesCreateModel,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createstatuses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * AuthenticatedUser
     * AuthenticatedUser
     * @returns UserModel AuthenticatedUser
     * @throws ApiError
     */
    public static getAuthenticateduser(): CancelablePromise<UserModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticateduser',
        });
    }

    /**
     * GetReport
     * GetReport
     * @param requestBody GetReport
     * @returns ReportModel GetReport
     * @throws ApiError
     */
    public static postGetreport(
        requestBody: RestA1_Pagination,
    ): CancelablePromise<ReportModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/getreport',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Sync
     * Sync
     * @returns Boolean Sync
     * @throws ApiError
     */
    public static getSync(): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sync',
        });
    }

    /**
     * UserExists
     * UserExists
     * @param requestBody UserExists
     * @returns Boolean UserExists
     * @throws ApiError
     */
    public static postUserexists(
        requestBody: RestA1_Email,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/userexists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateUpdatePlanning
     * CreateUpdatePlanning
     * @param requestBody CreateUpdatePlanning
     * @returns PlanningModel CreateUpdatePlanning
     * @throws ApiError
     */
    public static postCreateupdateplanning(
        requestBody: RestA2_PlanningCreateModel_Boolean,
    ): CancelablePromise<PlanningModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createupdateplanning',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * CreateIDStatuses
     * CreateIDStatuses
     * @param requestBody CreateIDStatuses
     * @returns Boolean CreateIDStatuses
     * @throws ApiError
     */
    public static postCreateidstatuses(
        requestBody: RestA1_BundledStatusesIDCreateModel,
    ): CancelablePromise<Boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/createidstatuses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ListSelfPlannings
     * ListSelfPlannings
     * @param requestBody ListSelfPlannings
     * @returns PlanningPaginationResult ListSelfPlannings
     * @throws ApiError
     */
    public static postListselfplannings(
        requestBody: RestA1_Pagination,
    ): CancelablePromise<PlanningPaginationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/listselfplannings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
