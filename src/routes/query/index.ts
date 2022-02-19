/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const rootUrl = 'https://cv-notion.herokuapp.com';
const config = {
	method: 'get',
	url: `${rootUrl}/lists`,
	headers: { Accept: 'application/json' }
};

export async function get() {
	// `params.id` comes from [id].js
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const response = await axios(config);
	const lists = response.data;

	if (lists) {
		return {
			body: { lists }
		};
	}
	return {
		status: 404,
		error: 'error'
	};
}
