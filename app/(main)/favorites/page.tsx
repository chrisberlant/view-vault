import { MovieType, SeriesType } from '@/types/tmdbTypes';
import fetchApi from '@/utils/fetchApi';
import Image from 'next/image';
import { imagesPath } from '@/utils/tmdb';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export default async function Page() {
	const session = await auth();
	if (!session) return null;
	const favorites = session.user?.favorites;

	return (
		<section>
			<h1>Favorites</h1>
			{favorites?.length ? (
				favorites?.map((favorite) => (
					<div key={favorite}>{favorite}</div>
				))
			) : (
				<div>Aucun favori</div>
			)}
		</section>
	);
}
