'use client';
import { HeartIcon } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function FavoriteHeart({ id }: { id: number }) {
	const { favorites, addFavorite, removeFavorite } = useStore();

	return favorites.some((fav) => fav === id) ? (
		<button
			onClick={() => removeFavorite(id)}
			className='absolute bottom-2 right-2 flex items-end'
		>
			<HeartIcon fill='red' className='hover:scale-125 cursor-pointer' />
		</button>
	) : (
		<button
			onClick={() => addFavorite(id)}
			className='absolute bottom-2 right-2 flex items-end'
		>
			<HeartIcon fill='grey' className='hover:scale-125 cursor-pointer' />
		</button>
	);
}
