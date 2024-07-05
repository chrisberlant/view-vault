import fetchApi from '@/utils/fetchApi';
import { MovieType, SeriesType, ShowsListType } from '@/types/tmdbTypes';
import Image from 'next/image';
import { imagesPath } from '@/utils/tmdb';
import Link from 'next/link';

type ShowSectionType = {
	title: string;
	apiUrl: string;
};

export default async function ShowSection({ title, apiUrl }: ShowSectionType) {
	const shows: ShowsListType = await fetchApi(apiUrl);
	const imagesSize = 154;

	return (
		<section>
			<h2 className='text-4xl mb-4 font-bold ml-8'>{title}</h2>
			<div className='flex flex-wrap gap-8 items-stretch justify-center'>
				{shows.results.map((show) => (
					<Link
						key={show.id}
						className='flex flex-col max-w-36'
						href={`show/${show.id}?type=${
							show.title ? 'movie' : 'tv'
						}`}
					>
						<span className='text-center flex-1 flex items-center justify-center'>
							{show.title ?? show.name}
						</span>
						<Image
							src={`${imagesPath}/w${imagesSize}/${show.poster_path}`}
							width={imagesSize}
							height={imagesSize}
							alt={`${show.title ?? show.name} poster`}
							className='mt-auto'
						/>
					</Link>
				))}
			</div>
		</section>
	);
}
