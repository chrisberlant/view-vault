import { Button } from '../components/ui/button';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-12 gap-4'>
			<h1 className='text-4xl mb-8'>Welcome to ViewVault</h1>
			<Image src='/films.jpg' alt='' width={800} height={800} />
			<div className='flex flex-col items-center gap-8 mt-8'>
				<Button>Create an account</Button>
				<div>
					Already have an account?{' '}
					<Button className='ml-4'>Sign in</Button>
				</div>
			</div>
		</main>
	);
}
