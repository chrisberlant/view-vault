import { ShowType } from '@/types/tmdbTypes';
import Link from 'next/link';
import Image from 'next/image';
import { imagesPath } from '@/utils/tmdb';
import FavoriteHeart from '../FavoriteHeart/FavoriteHeart';

export type ShowCardType = {
	show: ShowType;
};

export default function ShowCard({ show }: ShowCardType) {
	const imagesSize = 154;

	return (
		<div
			key={show.id}
			className='flex flex-col max-w-40 border-border rounded-xl border-2 bg-card pb-2 px-2'
		>
			<span className='text-center flex-1 flex items-center justify-center'>
				{show.title ?? show.name}
			</span>
			<div className='relative'>
				<Link
					href={`show/${show.id}?type=${show.title ? 'movie' : 'tv'}`}
				>
					<Image
						src={`${imagesPath}/w${imagesSize}/${show.poster_path}`}
						width={imagesSize}
						height={imagesSize}
						alt={`${show.title ?? show.name} poster`}
						className='mt-auto'
					/>
				</Link>
				<FavoriteHeart id={show.id} />
			</div>
		</div>
	);
}
