import type { Handle } from '@sveltejs/kit';
import {OpenAPI} from "./lib/generated";
import {authorize, logoutUrl} from "./lib/utils/Api";

OpenAPI.BASE = 'http://localhost:5173/api';

export const handle: Handle = async ({ event, resolve }) => {
    authorize(event.url);
    const res = await resolve(event);
    if (!res.ok && !['/login', '/logout'].find((route) => event.url.pathname.startsWith(route))) {
        return new Response(null, {
            status: 302,
            headers: { location: res.status === 404 ? logoutUrl() : logoutUrl(event.url) }
        });
    }
    return res;
};
