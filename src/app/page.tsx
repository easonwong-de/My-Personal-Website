import Navigator from "./Navigator";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

export default async function Page() {
	var data = await fetch(
		"https://addons.mozilla.org/api/v5/addons/addon/adaptive-tab-bar-colour/",
	).then((req) => req.json());
	return (
		<main className="mx-1 flex w-full max-w-4xl flex-col items-center sm:mx-auto sm:w-5/6 md:w-2/3">
			<HeroSection />
			<Navigator />
			<ExperienceSection />
			<ProjectSection />
			<BlogSection />
			<ContactSection />
		</main>
	);
}
