import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MovieType, SeriesType } from '../types/tmdbTypes';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
