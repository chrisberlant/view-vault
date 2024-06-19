import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import LoginModal from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';

export default function Home() {
	return (
		<>
			<header className='flex'>
				ViewVault <LoginModal homePage={true} />
			</header>
			<main className='flex min-h-screen flex-col items-center p-12 gap-4'>
				<h1 className='text-4xl mb-8'>Welcome to ViewVault</h1>
				<Image src='/films.jpg' alt='' width={800} height={800} />
				<div className='flex flex-col items-center mt-8'>
					<RegisterButton />
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
