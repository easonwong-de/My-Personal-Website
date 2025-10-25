import Image from "next/image";

interface TechCardProps {
	icon: string;
	name: string;
	description: string;
}

export default function TechCard({ icon, name, description }: TechCardProps) {
	return (
		<div className="flex min-w-0 flex-row gap-4 overflow-hidden rounded-2xl bg-(--background-6) p-4">
			<Image
				src={icon}
				alt={`${name} icon`}
				width="24"
				height="24"
				className="h-4 w-auto rounded-xl object-cover"
			/>
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-medium text-(--colour)">
					{name}
				</h3>
				<div className="text-sm text-(--colour-low)">{description}</div>
			</div>
		</div>
	);
}
