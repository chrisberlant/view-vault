import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { hashPassword } from '@/utils/password';
import { signInSchema } from '@/utils/zod';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub,
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				email: {
					label: 'email',
					type: 'text',
					placeholder: 'email@email.com',
				},
				password: {
					label: 'password',
					type: 'password',
					placeholder: 'password',
				},
			},
			authorize: async (credentials) => {
				let user = null;
				const { email, password } = await signInSchema.parseAsync(
					credentials
				);
				// logic to salt and hash password
				const hashedPassword = hashPassword(password);
				console.log('Autorisation');
				// logic to verify if user exists
				// user = await getUserFromDb(email, hashedPassword);

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
