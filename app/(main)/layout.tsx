import { redirect } from 'next/navigation';
import { auth } from '../../auth';
import LogoutButton from '../../components/AuthComponents/LogoutButton';

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	if (!session) return redirect('/');

	return (
		<>
			<header className='flex justify-end items-center gap-8 border-red-500 border py-2 mb-4 px-2'>
				<LogoutButton />
				<span className=''>{session?.user?.email}</span>
			</header>
			<main className='flex items-center justify-center border'>
				{children}
			</main>
		</>
	);
}
