interface ChipProps {
	children: string;
}

export default function Chip({ children }: ChipProps) {
	return (
		<div className="flex flex-row items-center justify-center gap-2 rounded-full bg-(--background-6) px-2 py-1 text-xs font-medium text-nowrap backdrop-blur-xl">
			{children}
		</div>
	);
}
