import Image from "next/image";

interface ProjectCardProps {
	cover: string;
	name: string;
	description: string;
	chipList: React.ReactNode[];
}

export default function ProjectCard({
	cover,
	name,
	description,
	chipList,
}: ProjectCardProps) {
	return (
		<div className="relative w-full min-w-0 overflow-hidden rounded-2xl text-sm text-(--colour-low)">
			<Image
				src={cover}
				alt={`${name} preview`}
				width="2400"
				height="1800"
				className="object-cover"
			/>
			<div className="absolute bottom-0 w-full p-4">
				<div className="flex flex-col gap-1 rounded-xl bg-(--background-6) p-4 backdrop-blur-xl">
					<h3 className="text-base font-medium text-(--colour)">
						{name}
					</h3>
					<div>{description}</div>
				</div>
				<div className="mt-1 flex flex-row flex-wrap gap-1 text-(--colour)">
					{chipList}
				</div>
			</div>
		</div>
	);
}
