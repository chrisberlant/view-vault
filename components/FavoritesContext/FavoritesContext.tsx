'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export const FavoritesContext = createContext<number[] | null | undefined>([]);

export default function FavoritesContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const { favorites, fetchFavorites } = useStore();

	useEffect(() => {
		fetchFavorites();
	}, [fetchFavorites]);

	return (
		<FavoritesContext.Provider value={favorites}>
			{children}
		</FavoritesContext.Provider>
	);
}
