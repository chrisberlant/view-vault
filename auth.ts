import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { hashPassword } from './utils/password';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub,
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				email: { type: 'text', placeholder: 'email@email.com' },
				password: { type: 'password', placeholder: 'password' },
			},
			authorize: async (credentials: any) => {
				let user = null;
				// logic to salt and hash password
				const hashedPassword = hashPassword(credentials.password);

				// logic to verify if user exists
				// user = await getUserFromDb(credentials.email, hashedPassword);

				if (!user) {
					// No user found, so this is their first attempt to login
					// meaning this is also the place you could do registration
					throw new Error('User not found.');
				}

				// return user object with the their profile data
				return user;
			},
		}),
	],
});
