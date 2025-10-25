import Image from "next/image";

interface ExperienceCardProps {
	logo: string;
	time: string;
	company: string;
	title: string;
	roleList: string[];
}

export default function ExperienceCard({
	logo,
	time,
	company,
	title,
	roleList,
}: ExperienceCardProps) {
	return (
		<div className="grid w-full min-w-0 grid-cols-[max-content_auto] grid-rows-[max-content_max-content] gap-4 rounded-2xl bg-(--background-6) p-4 text-sm text-(--colour-low)">
			<Image
				src={logo}
				alt={`${company} logo`}
				width={24}
				height={24}
				className="h-12 w-12 rounded-xl object-contain"
			/>
			<div className="flex flex-col">
				<div>{time}</div>
				<h3 className="text-base font-medium text-(--colour)">
					{company}
				</h3>
				<div className="font-medium">{title}</div>
			</div>
			<div className="col-start-2 flex min-w-0 flex-col text-sm">
				{roleList.map((role) => (
					<div key={role} className="flex flex-row items-start">
						<div className="mx-2 mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-current"></div>
						<div>{role}</div>
					</div>
				))}
			</div>
		</div>
	);
}
