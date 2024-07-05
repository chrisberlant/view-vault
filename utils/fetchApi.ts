export default async function fetchApi(route: string) {
	const tmdbUrl = 'https://api.themoviedb.org/3';
	const apiKey = process.env.TMDB_API_KEY;

	try {
		const response = await fetch(tmdbUrl + route + `?api_key=${apiKey}`);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
