import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import SignIn from './SignIn';

export default function LoginRegisterButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Sign in / Sign up</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Sign in</DialogTitle>
					<DialogDescription>
						Select a way to sign in.
					</DialogDescription>
				</DialogHeader>
				<SignIn />
			</DialogContent>
		</Dialog>
	);
}
