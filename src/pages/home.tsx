import styles from "../styles/banner.module.css";

// Components Import
import DecorativeImages from "../components/home/decorative-images";
import ContentOverlay from "../components/home/content-overlay";
import Cta from "../components/home/cta";
import SocialLinks from "../components/home/social-links";

// Assets Import

export default function Home() {
    return (
        <main
            className={styles.banner}
            role="img"
            aria-label="Event banner with illustrations"
        >
            <section className={styles.canvas}>
                <DecorativeImages />
                <ContentOverlay />
                <Cta />
                <SocialLinks />
            </section>
        </main>
    );
}
