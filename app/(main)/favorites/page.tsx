'use client';
import { useStore } from '@/lib/store';

export default function Page() {
	const { favorites } = useStore();

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
