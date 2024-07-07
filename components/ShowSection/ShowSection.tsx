import fetchApi from '@/utils/fetchApi';
import { MovieType, SeriesType, ShowsListType } from '@/types/tmdbTypes';
import Image from 'next/image';
import { imagesPath } from '@/utils/tmdb';
import Link from 'next/link';
import { HeartIcon } from 'lucide-react';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import FavoriteHeart from '../FavoriteHeart/FavoriteHeart';

type ShowSectionType = {
	title: string;
	apiUrl: string;
};

export default async function ShowSection({ title, apiUrl }: ShowSectionType) {
	const shows: ShowsListType = await fetchApi(apiUrl);
	const imagesSize = 154;
	const session = await auth();
	const favorites = session?.user.favorites;

	return (
		<section>
			<h2 className='text-4xl mb-4 font-bold ml-8'>{title}</h2>
			<div className='flex flex-wrap gap-8 items-stretch justify-center'>
				{shows.results.map((show) => (
					<div key={show.id} className='flex flex-col max-w-36'>
						<span className='text-center flex-1 flex items-center justify-center'>
							{show.title ?? show.name}
						</span>
						<div className='relative'>
							<Link
								href={`show/${show.id}?type=${
									show.title ? 'movie' : 'tv'
								}`}
							>
								<Image
									src={`${imagesPath}/w${imagesSize}/${show.poster_path}`}
									width={imagesSize}
									height={imagesSize}
									alt={`${show.title ?? show.name} poster`}
									className='mt-auto'
								/>
							</Link>
							{favorites && (
								<FavoriteHeart
									isFavorite={favorites.some(
										(favorite) => favorite === show.id
									)}
									id={show.id}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
