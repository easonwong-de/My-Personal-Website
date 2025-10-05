interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export default function Button({ children, onClick, className = "" }: ButtonProps) {
	return (
		<button
			className={`flex items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--colour-2) hover:bg-(--colour-3) ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
