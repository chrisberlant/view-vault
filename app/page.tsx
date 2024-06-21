import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import LoginRegisterButton from '../components/LoginRegisterButton';
import { auth } from '../auth';

export default async function Home() {
	const session = await auth();
	return (
		<>
			<header className='flex'>ViewVault</header>
			<main className='flex min-h-screen flex-col items-center p-12 gap-4'>
				<h1 className='text-4xl mb-8'>Welcome to ViewVault</h1>
				<Image src='/films.jpg' alt='' width={800} height={800} />
				<div className='flex flex-col items-center mt-8'>
					{session?.user
						? 'Connecté' + session?.user.email
						: 'Non connecté'}
					<LoginRegisterButton />
					<Link
						href=''
						className={
							buttonVariants({ variant: 'default' }) + ' mb-2'
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
