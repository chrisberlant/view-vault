export default function Page({
	params,
	searchParams,
}: {
	params: { id: number };
	searchParams: { type: string };
}) {
	return (
		<div>
			My Post: {params.id} Type: {searchParams.type}
		</div>
	);
}
