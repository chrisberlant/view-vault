export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type SeriesType = Omit<MovieType, 'title'> & { name: string };

export type ShowsListType = {
	dates: {
		maximum: Date;
		minimum: Date;
	};
	page: number;
	results: MovieType[] | SeriesType[];
};
