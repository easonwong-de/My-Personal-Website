import Image from "next/image";

interface ProjectCardProps {
	logo: string;
	time: string;
	company: string;
	title: string;
	roleList: string[];
}

export default function ProjectCard({ logo, time, company, title, roleList }: ProjectCardProps) {
	return (
		<div className="min-w-0 grid grid-cols-[max-content_auto] grid-rows-[max-content_max-content] bg-(--colour-1) p-4 gap-4 rounded-2xl w-full text-(--colour-8) text-sm">
			<Image
				src={logo}
				alt={`${company} logo`}
				width={24}
				height={24}
				className="object-contain w-12 h-12 rounded-xl"
			/>
			<div className="flex flex-col">
				<div>{time}</div>
				<div className="font-medium text-(--colour) text-base">{company}</div>
				<div className="font-medium">{title}</div>
			</div>
			<div className="flex flex-col min-w-0 col-start-2 text-sm">
				{roleList.map((role, index) => (
					<div key={role} className="flex flex-row items-start">
						<div className="flex-shrink-0 w-1 h-1 mx-2 mt-2 bg-current rounded-full"></div>
						<div>{role}</div>
					</div>
				))}
			</div>
		</div>
	);
}
