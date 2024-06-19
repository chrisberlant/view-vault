import { signIn } from '@/auth';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { DialogFooter } from './ui/Dialog';

export function SignIn() {
	return (
		<div>
			<form
				className='grid gap-4 py-4'
				action={async (formData) => {
					'use server';
					await signIn('credentials', formData);
				}}
			>
				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='email' className='text-right'>
						Email
					</Label>
					<Input name='email' type='email' className='col-span-3' />
				</div>
				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='password' className='text-right'>
						Password
					</Label>
					<Input
						id='password'
						className='col-span-3'
						type='password'
					/>
				</div>
				<DialogFooter>
					<Button type='submit'>Sign in</Button>
				</DialogFooter>
			</form>
			<form
				action={async () => {
					'use server';
					await signIn('github');
				}}
			>
				<button type='submit'>Signin with GitHub</button>
			</form>
		</div>
	);
}
