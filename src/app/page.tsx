import Navigator from "./Navigator";
import SectionHero from "./SectionHero";
import SectionExperience from "./SectionExperience";
import SectionProject from "./SectionProject";
import SectionBlog from "./SectionBlog";
import SectionContact from "./SectionContact";

export default function Home() {
	return (
		<main className="flex flex-col items-center mx-1 w-full sm:mx-auto sm:w-5/6 md:w-2/3 max-w-4xl">
			<SectionHero />
			<Navigator />
			<SectionExperience />
			<SectionProject />
			<SectionBlog />
			<SectionContact />
		</main>
	);
}
