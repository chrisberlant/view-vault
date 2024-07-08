'use server';

import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const addToFavorites = async (id: number) => {
	const session = await auth();
	await prisma.user.update({
		where: {
			email: session?.user?.email!,
		},
		data: {
			favorites: {
				push: id,
			},
		},
	});
};

export const removeFromFavorites = async (id: number) => {
	const session = await auth();
	const user = await prisma.user.findUnique({
		where: { email: session?.user?.email! },
		select: { favorites: true },
	});
	await prisma.user.update({
		where: {
			email: session?.user?.email!,
		},
		data: {
			favorites: {
				set: user?.favorites.filter((favorite) => favorite !== id),
			},
		},
	});
};
