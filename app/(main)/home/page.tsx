import ShowsSection from '@/components/ShowsSection/ShowsSection';

// Homepage containing the trending shows
export default async function Page() {
	return (
		<div className='flex flex-col gap-12'>
			<ShowsSection
				title='Movies now playing'
				apiUrl='/movie/now_playing'
			/>

			<ShowsSection
				title='Movies trending this week'
				apiUrl='/trending/movie/week'
			/>
			<ShowsSection title='Series on the air' apiUrl='/tv/on_the_air' />
		</div>
	);
}
