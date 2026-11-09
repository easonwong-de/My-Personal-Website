import Image from "next/image";

import styles from "./TechCard.module.css";

interface TechCardProps {
	icon: string;
	name: string;
	description: string;
}

export default function TechCard({ icon, name, description }: TechCardProps) {
	return (
		<div className={styles.card}>
			<Image
				src={icon}
				alt={`${name} icon`}
				width="24"
				height="24"
				className={styles.icon}
			/>
			<div className={styles.info}>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
