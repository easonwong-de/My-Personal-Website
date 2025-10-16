import ExperienceCard from "@/app/ExperienceCard";

export default function ExperienceSection() {
	return (
		<section className="flex flex-col w-full gap-4 py-16 mt-16 lg:flex-row">
			<div className="flex flex-col flex-1 min-w-0 gap-4 shrink-1 basis-1/2">
				<h2 className="p-4 text-xl font-bold text-center uppercase">Work</h2>
				<ExperienceCard
					logo="/image/tourbosoft.logo.jpeg"
					time="06.2025 - Present"
					company="Tourbosoft GmbH"
					title="Software Developer (Working Student)"
					roleList={[
						"Contributing to Tourbosoft.App, an Android application built with the latest Android SDK",
						"Working on TWS, a full-stack web application using Blazor and Entity Framework",
						"Collaborating with a tightly knit team of developers",
					]}
				/>
				<ExperienceCard
					logo="/image/iav.logo.png"
					time="07.2023 - 02.2024"
					company="IAV Fahrzeugsicherheit GmbH & Co. KG"
					title="Bachelor Thesis"
					roleList={[
						"Designed intuitive GUI for requirement and test case creation",
						"Developed and deployed application using Electron framework",
						"Participated in agile development meetings with system engineers",
					]}
				/>
				<ExperienceCard
					logo="/image/rub.logo.svg"
					time="07.2022 - 12.2022"
					company="Ruhr-Universität Bochum"
					title="Research Assistant (Internship)"
					roleList={[
						"Improved LabVIEW programmes of experiment equipments in a chemistry laboratory",
						"Redesigned control logic, UI, watchdog and safety functions of the programmes",
						"Enhanced modularity and scalability of existing programmes",
					]}
				/>
			</div>
			<div className="flex flex-col flex-1 min-w-0 gap-4 shrink-1 basis-1/2">
				<h2 className="p-4 text-xl font-bold text-center uppercase">Education</h2>
				<ExperienceCard
					logo="/image/tub.logo.png"
					time="10.2024 - Present"
					company="Technische Universität Berlin"
					title="Master of Science, Automotive Systems"
					roleList={[
						"Interdisziplinärer Schwerpunkt auf Fahrzeugtechnik, Informatik und Elektrotechnik",
						"Voraussichtlicher Abschluss im Jahr 2027",
					]}
				/>
				<ExperienceCard
					logo="/image/htw.logo.png"
					time="10.2021 - 04.2024"
					company="Hochschule für Technik und Wirtschaft Berlin"
					title="Bachelor of Science, Fahrzeugtechnik"
					roleList={["Bachelorarbeit in Zusammenarbeit mit der IAV Fahrzeugsicherheit GmbH & Co. KG"]}
				/>
				<ExperienceCard
					logo="/image/tju.logo.png"
					time="09.2018 - 07.2024"
					company="Chinesisch-Deutsche Hochschule für Angewandte Wissenschaften (CDHAW) der Tongji-Universität"
					title="Bachelor of Engineering, Fahrzeugtechnik"
					roleList={["Doppelabschlussprogramm mit der HTW Berlin"]}
				/>
			</div>
		</section>
	);
}
