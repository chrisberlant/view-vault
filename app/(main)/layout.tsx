import { redirect } from 'next/navigation';
import { auth } from '../../auth';
import LogoutButton from '../../components/auth/LogoutButton';
import LoginRegisterButton from '../../components/auth/LoginRegisterButton';

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	return (
		<>
			<header className='flex flex-wrap justify-end items-center gap-8 border-red-500 border py-2 mb-4 px-2'>
				{session ? (
					<>
						<LogoutButton />
						<span>{session?.user?.email}</span>
					</>
				) : (
					<LoginRegisterButton />
				)}
			</header>
			<main className='flex items-center justify-center border flex-1'>
				{children}
			</main>
		</>
	);
}
