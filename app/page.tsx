import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import LoginRegisterButton from '../components/auth/LoginRegisterButton';
import { auth } from '../lib/auth';
import LogoutButton from '../components/auth/LogoutButton';
import { redirect } from 'next/navigation';

export default async function Page() {
	const session = await auth();
	if (session) return redirect('/home');
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'test',
	// 	},
	// });
	return (
		<>
			<header className='flex'>ViewVault</header>
			<main className='flex min-h-screen flex-col items-center p-12 gap-4'>
				<h1 className='text-4xl mb-8'>Welcome to ViewVault</h1>
				<Image src='/films.jpg' alt='' width={800} height={800} />
				<div className='flex flex-col items-center mt-8'>
					<LoginRegisterButton />
					<Link
						href='/home'
						className={
							buttonVariants({ variant: 'default' }) +
							' mt-8 mb-2'
						}
					>
						Access without account
					</Link>
					<span className='text-sm'>
						(You will not be able to save your favorite shows)
					</span>
				</div>
			</main>
		</>
	);
}
