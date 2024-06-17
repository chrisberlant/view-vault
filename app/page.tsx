import Link from 'next/link';
import { buttonVariants } from '../components/ui/Button';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-12 gap-4'>
			<h1 className='text-4xl mb-8'>Welcome to ViewVault</h1>
			<Image src='/films.jpg' alt='' width={800} height={800} />
			<div className='flex flex-col items-center mt-8'>
				<Link
					href=''
					className={buttonVariants({ variant: 'default' }) + ' mb-8'}
				>
					Create an account
				</Link>
				<Link
					href=''
					className={buttonVariants({ variant: 'default' }) + ' mb-2'}
				>
					Access without account
				</Link>
				<span className='text-sm'>
					(You will not be able to save your favorite shows)
				</span>
			</div>
		</main>
	);
}
