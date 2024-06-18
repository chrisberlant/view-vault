import { signIn } from '@/auth';

export function SignIn() {
	return (
		<div>
			<form
				action={async (formData) => {
					'use server';
					await signIn('credentials', formData);
				}}
			>
				<label>
					Email
					<input name='email' type='email' />
				</label>
				<label>
					Password
					<input name='password' type='password' />
				</label>
				<button>Sign In</button>
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
