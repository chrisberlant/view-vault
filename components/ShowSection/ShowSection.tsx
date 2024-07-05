import fetchApi from '@/utils/fetchApi';
import { MovieType, SeriesType, ShowsListType } from '@/types/tmdbTypes';
import Image from 'next/image';
import { imagesPath, imagesSize } from '@/utils/tmdb';
import Link from 'next/link';

type ShowSectionType = {
	title: string;
	apiUrl: string;
	type: 'movies' | 'series';
};

export default async function ShowSection({
	title,
	apiUrl,
	type,
}: ShowSectionType) {
	const shows: ShowsListType = await fetchApi(apiUrl);
	const showType = type === 'movies' ? 'movie' : 'tv';

	return (
		<section>
			<h2 className='text-4xl mb-4 font-bold'>{title}</h2>
			<div className='flex flex-wrap gap-8 items-stretch justify-center'>
				{shows.results.map((show) => (
					<Link
						key={show.id}
						className='flex flex-col max-w-36'
						href={`show/${show.id}?type=${showType}`}
					>
						<span className='text-center flex-1 flex items-center justify-center'>
							{showType === 'movie'
								? (show as MovieType)?.title
								: (show as SeriesType)?.name}
						</span>
						<Image
							src={`${imagesPath}${show.poster_path}`}
							width={imagesSize}
							height={imagesSize}
							alt={`${
								showType === 'movie'
									? (show as MovieType)?.title
									: (show as SeriesType)?.name
							} poster`}
							className='mt-auto'
						/>
					</Link>
				))}
			</div>
		</section>
	);
}
