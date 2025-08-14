import styles from "../../styles/banner.module.css";

export default function Cta() {
  return (
    <div className={styles.cta}>
        <a
          href="https://pretix.eu/apostrophdesign/houseparty/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          get your ticket
        </a>

      <div className={styles.limitedMerchContainer}>
        <div className={styles.dot} />
        <p className={styles.limitedMerch}>Limited Merch + Tattoo Station!!</p>
        <div className={styles.dot} />
      </div>
    </div>
  );
}
