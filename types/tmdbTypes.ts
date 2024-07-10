export type MovieType = {
	title: string;
	original_title: string;
	name?: undefined;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type SeriesType = Omit<MovieType, 'title'> & { name: string };

export type ShowType = MovieType | SeriesType;

export type FailedRequest = {
	success: boolean;
	status_code: number;
	status_message: 'The resource you requested could not be found.';
};

export type ShowsListType = {
	dates: {
		maximum: Date;
		minimum: Date;
	};
	page: number;
	results: ShowType[];
};
