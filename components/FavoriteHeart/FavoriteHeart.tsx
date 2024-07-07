import { HeartIcon } from 'lucide-react';
import prisma from '@/lib/prisma';
import { auth } from '../../lib/auth';

export default async function FavoriteHeart({
	isFavorite,
	id,
}: {
	isFavorite: boolean;
	id: number;
}) {
	const session = await auth();

	const addToFavorites = async (id: number) => {
		'use server';
		await prisma.user.update({
			where: {
				email: session?.user?.email!,
			},
			data: {
				favorites: {
					push: id,
				},
			},
		});
	};

	const removeFromFavorites = async (id: number) => {
		'use server';
		const user = await prisma.user.findUnique({
			where: { email: session?.user?.email! },
			select: { favorites: true },
		});
		await prisma.user.update({
			where: {
				email: session?.user?.email!,
			},
			data: {
				favorites: {
					set: user?.favorites.filter((favorite) => favorite !== id),
				},
			},
		});
	};

	return (
		session && (
			<form className='absolute bottom-2 right-2 flex items-end'>
				{isFavorite ? (
					<button
						formAction={async () => {
							'use server';
							removeFromFavorites(id);
						}}
					>
						<HeartIcon
							fill='red'
							className='hover:scale-125 cursor-pointer'
						/>
					</button>
				) : (
					<button
						formAction={async () => {
							'use server';
							addToFavorites(id);
						}}
					>
						<HeartIcon
							fill='grey'
							className='hover:scale-125 hover:fill-red-500 hover:border-red-500 cursor-pointer'
						/>
					</button>
				)}
			</form>
		)
	);
}
