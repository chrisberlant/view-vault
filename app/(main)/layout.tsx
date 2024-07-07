import { auth } from '@/lib/auth';
import LogoutButton from '@/components/auth/LogoutButton';
import LoginRegisterButton from '@/components/auth/LoginRegisterButton';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	return (
		<>
			<header className='flex flex-wrap justify-end items-center gap-8 border-red-500 border py-2 mb-4 px-2'>
				<Link
					href='/home'
					className='mr-auto ml-4 flex items-center gap-2'
				>
					<Home />
					ViewVault
				</Link>
				{session ? (
					<>
						<LogoutButton />
						<Link href='/favorites'>Favorites</Link>
						<span>{session?.user?.email}</span>
					</>
				) : (
					<LoginRegisterButton />
				)}
			</header>
			<main className='flex border flex-1 flex-grow'>{children}</main>
		</>
	);
}
