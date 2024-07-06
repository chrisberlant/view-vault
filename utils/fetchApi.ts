import { apiKey, tmdbUrl } from './tmdb';

export default async function fetchApi(route: string) {
	try {
		const response = await fetch(tmdbUrl + route + `?api_key=${apiKey}`);
		const data = await response.json();
		if (data.success === false) {
			throw new Error('Request failed');
		}
		return data;
	} catch (error) {
		return error;
	}
}
