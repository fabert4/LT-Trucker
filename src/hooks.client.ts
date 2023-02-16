import { redirect, type HandleClientError } from '@sveltejs/kit';
import {logoutUrl} from "./lib/utils/Api";
import {ApiError, OpenAPI} from "./lib/generated";

OpenAPI.BASE = 'http://localhost:5173/api';

export const handleError: HandleClientError = ({ error, event }) => {
    if (error instanceof ApiError && error.status === 401) {
        throw redirect(302, logoutUrl(event.url));
    }
};
