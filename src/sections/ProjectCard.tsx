import Image from "next/image";
import styles from "./ProjectCard.module.css";

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
		<div className={styles.card}>
			<Image
				src={cover}
				alt={`${name} preview`}
				width="2400"
				height="1800"
				className={styles.cover}
			/>
			<div className={styles.overlay}>
				<div className={styles.info}>
					<h3 className={styles.name}>{name}</h3>
					<div>{description}</div>
				</div>
				<div className={styles.chips}>{chipList}</div>
			</div>
		</div>
	);
}
