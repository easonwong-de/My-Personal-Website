import Image from "next/image";

interface TechCardProps {
	icon: string;
	name: string;
	description: string;
}

export default function TechCard({ icon, name, description }: TechCardProps) {
	return (
		<div className="flex flex-row min-w-0 gap-4 p-4 overflow-hidden rounded-2xl bg-(--background-6)">
			<Image
				src={icon}
				alt={`${name} icon`}
				width="24"
				height="24"
				className="object-cover w-auto h-4 rounded-xl"
			/>
			<div className="flex flex-col gap-1">
				<h3 className="font-medium text-(--colour) text-base">{name}</h3>
				<div className="text-sm text-(--colour-low)">{description}</div>
			</div>
		</div>
	);
}
