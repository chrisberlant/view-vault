import { signOut } from '@/lib/auth';
import { Button } from '../ui/button';

export default function LogoutButton() {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
		>
			<Button type='submit'>Sign out</Button>
		</form>
	);
}
