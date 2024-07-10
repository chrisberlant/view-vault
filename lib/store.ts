import { create } from 'zustand';
import {
	addToFavorites,
	getFavorites,
	removeFromFavorites,
} from '@/server-actions/favorites';
import { toast } from 'sonner';

type Store = {
	favorites: number[];
	fetchFavorites: () => void;
	addFavorite: (id: number) => void;
	removeFavorite: (id: number) => void;
};

export const useStore = create<Store>((set) => ({
	favorites: [],
	fetchFavorites: async () => {
		const favorites = await getFavorites();
		set({ favorites });
	},
	addFavorite: async (id: number) => {
		await addToFavorites(id);
		set((state) => ({ favorites: [...state.favorites, id] }));
		toast('Added to favorites');
	},
	removeFavorite: async (id: number) => {
		await removeFromFavorites(id);
		set((state) => ({
			favorites: state.favorites?.filter((fav) => fav !== id) || [],
		}));
		toast('Removed from favorites');
	},
}));
