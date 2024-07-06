import { MovieType, SeriesType } from '@/types/tmdbTypes';
import fetchApi from '@/utils/fetchApi';
import Image from 'next/image';
import { imagesPath } from '@/utils/tmdb';

export default async function Page({
	params,
	searchParams,
}: {
	params: { id: number };
	searchParams: { type: string };
}) {
	const show: MovieType | SeriesType = await fetchApi(
		`/${searchParams.type}/${params.id}`
	);
	const imagesSize = 780;

	return (
		<section>
			<h1 className='font-bold text-2xl'>{show.title ?? show.name}</h1>
			<Image
				src={`${imagesPath}/original/${show.backdrop_path}`}
				alt={`${show.title ?? show.name} image`}
				width={780}
				height={780}
			/>
		</section>
	);
}
