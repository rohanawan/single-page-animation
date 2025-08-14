import styles from "../../styles/banner.module.css";

export default function Cta() {
  return (
    <div className={styles.cta}>
      <button type="button" className={styles.button}>
        <p>get your ticket</p>
      </button>

      <div className={styles.limitedMerchContainer}>
        <div className={styles.dot} />
        <p className={styles.limitedMerch}>Limited Merch + Tattoo Station!!</p>
        <div className={styles.dot} />
      </div>
    </div>
  );
}
