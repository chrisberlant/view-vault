'use client';
import { HeartIcon } from 'lucide-react';
import {
	removeFromFavorites,
	addToFavorites,
} from '@/server-actions/favorites';
import { toast } from 'sonner';
import { useState } from 'react';

export default function FavoriteHeart({
	isFavorite,
	id,
}: {
	isFavorite: boolean;
	id: number;
}) {
	const [favorite, setFavorite] = useState(isFavorite);

	return favorite ? (
		<button
			onClick={async () => {
				await removeFromFavorites(id);
				setFavorite(false);
				toast('Removed from favorites');
			}}
			className='absolute bottom-2 right-2 flex items-end'
		>
			<HeartIcon fill='red' className='hover:scale-125 cursor-pointer' />
		</button>
	) : (
		<button
			onClick={async () => {
				await addToFavorites(id);
				setFavorite(true);
				toast('Added to favorites');
			}}
			className='absolute bottom-2 right-2 flex items-end'
		>
			<HeartIcon fill='grey' className='hover:scale-125 cursor-pointer' />
		</button>
	);
}
