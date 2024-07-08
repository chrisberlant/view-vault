'use client';
import { HeartIcon } from 'lucide-react';
import {
	removeFromFavorites,
	addToFavorites,
} from '@/server-actions/favorites';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function FavoriteHeart({
	isFavorite,
	id,
}: {
	isFavorite: boolean;
	id: number;
}) {
	const router = useRouter();

	return isFavorite ? (
		<button
			onClick={async () => {
				await removeFromFavorites(id);
				router.refresh();
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
				router.refresh();
				toast('Added to favorites');
			}}
			className='absolute bottom-2 right-2 flex items-end'
		>
			<HeartIcon fill='grey' className='hover:scale-125 cursor-pointer' />
		</button>
	);
}
