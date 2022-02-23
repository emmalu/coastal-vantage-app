/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const rootUrl = 'https://cv-notion.herokuapp.com';
const config = {
	method: 'get',
	url: `${rootUrl}/posts`,
	headers: { Accept: 'application/json', 'Cache-Control': 'public, max-age=0' }
};

export async function get() {
	// `params.id` comes from [id].js
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const response = await axios(config);
	const data = response.data;
	//console.log(data);
	if (data) {
		return {
			body: data
		};
	}
	return {
		status: 404,
		error: 'error'
	};
}
