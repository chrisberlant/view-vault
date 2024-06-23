import fetchApi from '@/utils/fetchApi';
import { MovieType, SeriesType, ShowsListType } from '@/types/tmdbTypes';
import Image from 'next/image';
import { imagesPath, imagesSize } from '@/utils/tmdb';

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
	return (
		<section>
			<h2 className='text-4xl mb-4 font-bold'>{title}</h2>
			<div className='flex flex-wrap gap-8 items-stretch justify-center'>
				{shows.results.map((show) => (
					<div key={show.id} className='flex flex-col max-w-36'>
						<span className='text-center flex-1 flex items-center justify-center'>
							{type === 'movies'
								? (show as MovieType)?.title
								: (show as SeriesType)?.name}
						</span>
						<Image
							src={`${imagesPath}${show.poster_path}`}
							width={imagesSize}
							height={imagesSize}
							alt={`${
								type === 'movies'
									? (show as MovieType)?.title
									: (show as SeriesType)?.name
							} poster`}
							className='mt-auto'
						/>
					</div>
				))}
			</div>
		</section>
	);
}
