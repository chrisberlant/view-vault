import ShowSection from '@/components/ShowSection/ShowSection';

// Homepage containing the trending shows
export default async function Page() {
	return (
		<div className='flex flex-col gap-12'>
			<ShowSection
				title='Movies now playing'
				apiUrl='/movie/now_playing'
			/>

			<ShowSection
				title='Movies trending this week'
				apiUrl='/trending/movie/week'
			/>
			<ShowSection title='Series on the air' apiUrl='/tv/on_the_air' />
		</div>
	);
}
