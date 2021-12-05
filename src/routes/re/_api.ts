import type { EndpointOutput, Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

/*
	This module is used by the /re.json and /re/[uid].json
	endpoints to make calls to api.svelte.dev, which stores re
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /re/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

const base = 'https://api.svelte.dev';

export async function api(
	request: Request<Locals>,
	resource: string,
	data?: Record<string, unknown>
): Promise<EndpointOutput> {
	// user must have a cookie set
	if (!request.locals.userid) {
		return { status: 401 };
	}

	const res = await fetch(`${base}/${resource}`, {
		method: request.method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});

	// if the request came from a <form> submission, the browser's default
	// behaviour is to show the URL corresponding to the form's "action"
	// attribute. in those cases, we want to redirect them back to the
	// /re page, rather than showing the response
	if (res.ok && request.method !== 'GET' && request.headers.accept !== 'application/json') {
		return {
			status: 303,
			headers: {
				location: '/re'
			}
		};
	}

	return {
		status: res.status,
		body: await res.json()
	};
}
