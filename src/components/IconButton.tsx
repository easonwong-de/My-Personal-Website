import Image from "next/image";

import styles from "./IconButton.module.css";

export default function IconButton() {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>
				<div className={styles.iconContainer}>
					<Image
						src="/image/icon.svg"
						alt="O"
						width={24}
						height={24}
						className={styles.iconImage}
					/>
				</div>
				<div className={styles.textContainer}>
					<div className={styles.textContent}>Eason</div>
				</div>
			</h2>
		</div>
	);
}
