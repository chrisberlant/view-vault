import fetchApi from '@/utils/fetchApi';
import { ShowsListType } from '@/types/tmdbTypes';
import ShowCard from '../ShowCard/ShowCard';

type ShowSectionType = {
	title: string;
	apiUrl: string;
};

export default async function ShowSection({ title, apiUrl }: ShowSectionType) {
	const shows: ShowsListType = await fetchApi(apiUrl);

	return (
		<section>
			<h2 className='text-4xl mb-4 font-bold ml-8'>{title}</h2>
			<div className='flex flex-wrap gap-8 items-stretch justify-center'>
				{shows.results.map((show) => (
					<ShowCard show={show} key={show.id} />
				))}
			</div>
		</section>
	);
}
