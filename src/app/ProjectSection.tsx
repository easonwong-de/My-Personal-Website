import Chip from "@/components/Chip";
import ProjectCard from "@/app/ProjectCard";
import TechCard from "@/app/TechCard";

export default function ProjectSection() {
	return (
		<section className="mt-16 flex w-full flex-col gap-4 py-16 lg:flex-row">
			<div className="flex min-w-0 flex-1 shrink-1 basis-1/2 flex-col gap-4">
				<h2 className="p-4 text-center text-xl font-bold uppercase">
					Project
				</h2>
				<ProjectCard
					cover="/image/atbc.cover.png"
					name="Adaptive Tab Bar Colour"
					description="Changes the colour of Firefox theme to match the website’s appearance."
					chipList={[
						<Chip key="atbc-1">Active</Chip>,
						<Chip key="atbc-2">Live users: 35K</Chip>,
						<Chip key="atbc-3">GitHub stars: 618</Chip>,
						<Chip key="atbc-4">JavaScript</Chip>,
					]}
				/>
				<ProjectCard
					cover="/image/tpoh.cover.png"
					name="Tab Preview On Hover"
					description="Adds on-hover tab preview to Firefox before Mozilla does."
					chipList={[
						<Chip key="tpoh-1">Decommissioned</Chip>,
						<Chip key="tpoh-2">GitHub stars: 37</Chip>,
						<Chip key="tpoh-3">JavaScript</Chip>,
					]}
				/>
				<ProjectCard
					cover="/image/svgr.cover.png"
					name="SVG Replacer"
					description="Replaces SVG paths with custom ones on websites."
					chipList={[
						<Chip key="svgr-1">Decommissioned</Chip>,
						<Chip key="svgr-2">GitHub stars: 4</Chip>,
						<Chip key="svgr-3">JavaScript</Chip>,
					]}
				/>
			</div>
			<div className="flex min-w-0 flex-1 shrink-1 basis-1/2 flex-col gap-4">
				<h2 className="p-4 text-center text-xl font-bold uppercase">
					Tech stack
				</h2>
				<div className="grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] grid gap-4">
					<TechCard
						icon="/image/javascript.svg"
						name="JavaScript"
						description="Programming language"
					/>
					<TechCard
						icon="/image/kotlin.svg"
						name="Kotlin"
						description="Programming language"
					/>
					<TechCard
						icon="/image/next.js.svg"
						name="Next.js"
						description="Web app framework"
					/>
				</div>
			</div>
		</section>
	);
}
