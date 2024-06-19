import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
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
