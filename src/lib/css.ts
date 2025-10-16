import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function css(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
