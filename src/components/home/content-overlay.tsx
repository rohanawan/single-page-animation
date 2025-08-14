import styles from "../../styles/banner.module.css";

// Assets Import
import title from "../../assets/title.png";
import cherry from "../../assets/cherry.png";

export default function ContentOverlay() {
    return (
        <div className={styles.centerContent}>
            <img
                src={title}
                className={styles.title}
                alt="Event Title"
                draggable="false"
                decoding="async"
            />

            <div className={styles.metaContainer}>
                <p className={styles.meta}>12.09.2025 8:00 PM</p>
                <p className={styles.meta}>Platzl 5 — Munich</p>
            </div>

            {/* Cherry */}
            <img
                src={cherry}
                alt=""
                className={`${styles.layer} ${styles.layerCherry}`}
                aria-hidden="true"
                decoding="async"
            />
        </div>
    );
}
