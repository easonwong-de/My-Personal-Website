interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button
			className="flex h-8 cursor-pointer items-center justify-center rounded-full bg-(--background-6) px-4 font-medium backdrop-blur-xl transition-all select-none hover:bg-(--background-9)"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
