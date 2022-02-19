import cookie from 'cookie';
import { Headers } from '@sveltejs/kit/install-fetch';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	const headers = new Headers();
	//const cookies = cookie.parse(request.headers.cookie || '');
	const cookies = headers.get('cookie') || '';
	request.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	/* if (event.query.has('_method')) {
		event.method = event.query.get('_method').toUpperCase();
	} */

	const response = await resolve(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	return response;
};
