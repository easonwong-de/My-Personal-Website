import styles from "./page.module.css";

export default async function Page() {
	await fetch(
		"https://addons.mozilla.org/api/v5/addons/addon/adaptive-tab-bar-colour/",
	);
	return (
		<main className={styles.main}>
			<HeroSection />
			<NavigatorSection />
			<ExperienceSection />
			<ProjectSection />
			<BlogSection />
			<ContactSection />
		</main>
	);
}
