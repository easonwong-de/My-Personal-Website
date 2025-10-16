interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button
			className="flex items-center justify-center h-8 px-4 font-medium transition-all rounded-full select-none backdrop-blur-xl cursor-pointer bg-(--background-6) hover:bg-(--background-9)"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
