import { Button, buttonVariants } from '@/components/ui/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import Link from 'next/link';
import { signIn } from '../auth';
import { SignIn } from './SignIn';

export default function LoginButton({
	homePage = false,
}: {
	homePage?: boolean;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='ml-auto'>
					{homePage && (
						<span className='hover:underline mr-4'>
							Already have an account?
						</span>
					)}
					<Button variant='outline'>Sign in</Button>
				</div>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Sign in</DialogTitle>
					<DialogDescription>
						Select a way to sign in.
					</DialogDescription>
				</DialogHeader>
				<SignIn />
				{/* <DialogFooter>
					<Button type='submit'>Sign in</Button>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}
