import styles from "./NavigatorSection.module.css";

export default function NavigatorSection() {
	return (
		<nav className={styles.navigator}>
			<div className={styles.links}>
				<Button>Experience</Button>
				<Button>Repertoire</Button>
				<Button>Blogs</Button>
				<Button>Contact</Button>
			</div>
		</nav>
	);
}
