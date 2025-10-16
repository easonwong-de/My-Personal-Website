import Image from "next/image";

interface ProjectCardProps {
	cover: string;
	name: string;
	description: string;
	chipList: React.ReactNode[];
}

export default function ProjectCard({ cover, name, description, chipList }: ProjectCardProps) {
	return (
		<div className="w-full min-w-0 text-sm text-(--colour-low) rounded-2xl relative overflow-hidden">
			<Image
				src={cover}
				alt={`${name} preview`}
				width="2400"
				height="1800"
				className="object-cover"
			/>
			<div className="absolute bottom-0 w-full p-4">
				<div className="flex flex-col gap-1 p-4 rounded-xl backdrop-blur-xl bg-(--background-6)">
					<h3 className="font-medium text-(--colour) text-base">{name}</h3>
					<div>{description}</div>
				</div>
				<div className="flex flex-row flex-wrap gap-1 mt-1 text-(--colour)">{chipList}</div>
			</div>
		</div>
	);
}
