import { type ClassValue, clsx } from "clsx";

export function css(...inputs: ClassValue[]): string {
	return clsx(inputs);
}
