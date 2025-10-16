interface ChipProps {
	children: string;
}

export default function Chip({ children }: ChipProps) {
	return (
		<div className="flex flex-row items-center justify-center gap-2 px-2 py-1 text-xs font-medium rounded-full backdrop-blur-xl text-nowrap bg-(--background-6)">
			{children}
		</div>
	);
}
