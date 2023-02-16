import {page} from '$app/stores';


import {get} from 'svelte/store';
import {OpenAPI} from "../generated";
import type {ApiRequestOptions} from "../generated/core/ApiRequestOptions";

export function authorize(url: URL) {
    OpenAPI.HEADERS = async (options: ApiRequestOptions) => {
        const params = lowercaseSearchParams(url.searchParams);
        const accesscode = params.get('auth') ?? params.get('accesscode');
        const jwt = params.get('jwt');
        const auth = accesscode ? `AccessCode ${accesscode}` : jwt ? `Bearer ${jwt}` : '';
        return {authorization: auth};
    };
}

export function isAccesscode(): boolean {
    return lowercaseSearchParams(get(page).url.searchParams).has('accesscode');
}

export function lowercaseSearchParams(params: URLSearchParams): URLSearchParams {
    const lowercaseParams = new URLSearchParams();
    for (const [name, value] of params) {
        lowercaseParams.append(name.toLowerCase(), value);
    }
    return lowercaseParams;
}

export function logoutUrl(url: URL | undefined = undefined): string {
    return `/logout${url ? returnUrl(url) : ''}`;
}

function returnUrl(url: URL): string {
    url.searchParams.delete('page');
    const returnUrl =
        url.pathname.slice(1) +
        (url.searchParams.toString().length ? '?' + url.searchParams.toString() : '');
    const encodedUrl = encodeURIComponent(returnUrl);
    return encodedUrl.length ? `?page=${encodedUrl}` : '';
}
