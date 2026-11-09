import Image from "next/image";

import styles from "./ExperienceCard.module.css";

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
		<div className={styles.card}>
			<Image
				src={logo}
				alt={`${company} logo`}
				width={24}
				height={24}
				className={styles.logo}
			/>
			<div className={styles.header}>
				<div>{time}</div>
				<h3 className={styles.company}>{company}</h3>
				<div className={styles.title}>{title}</div>
			</div>
			<div className={styles.roleList}>
				{roleList.map((role) => (
					<div key={role} className={styles.roleItem}>
						<div className={styles.bullet}></div>
						<div>{role}</div>
					</div>
				))}
			</div>
		</div>
	);
}
