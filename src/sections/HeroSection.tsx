import Image from "next/image";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
	return (
		<section className={styles.hero}>
			<div className={styles.spacerTop}></div>
			<div>
				<h1 className={styles.title}>Hi, this is Eason</h1>
				<div className={styles.subtitle}>aka Yixin Wang</div>
			</div>
			<div className={styles.spacer}></div>
			<div className={styles.occupation}>
				<div>Master student at TU Berlin &</div>
				<div>Software developer</div>
			</div>
			<div className={styles.location}>
				<span className={styles.locationContent}>
					<Image
						src="/image/globe.europe.africa.svg"
						alt="🌍"
						width={16}
						height={16}
						className={styles.globeIcon}
					/>
					based in Berlin, Germany
				</span>
			</div>
			<div className={styles.spacer}></div>
		</section>
	);
}
