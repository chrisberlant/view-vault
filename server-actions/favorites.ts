'use server';

import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getFavorites = async () => {
	const session = await auth();
	if (!session) return undefined;

	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email!,
		},
		select: {
			favorites: true,
		},
	});
	return user?.favorites;
};

export const addToFavorites = async (id: number) => {
	const session = await auth();
	if (!session) return undefined;

	const user = await prisma.user.findUnique({
		where: { email: session.user?.email! },
		select: { favorites: true },
	});

	if (user?.favorites.some((fav) => fav === id)) return undefined;

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
	if (!session) return undefined;

	const user = await prisma.user.findUnique({
		where: { email: session.user?.email! },
		select: { favorites: true },
	});

	if (!user?.favorites.some((fav) => fav === id)) return undefined;

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
