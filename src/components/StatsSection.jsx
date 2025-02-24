import styles from "@/styles/StatsSection.module.css";

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsLeft}>
          <h1>
            <span className={styles.highlight}>7</span>
            <span className={styles.boldText}> million</span>
          </h1>
          <p>Patients treated with our ophthalmic solutions.</p>
        </div>
        <div className={styles.statsRight}>
          <div className={styles.stat}>
            <h2>1.8x</h2>
            <p>Improved treatment efficiency</p>
          </div>
          <div className={styles.stat}>
            <h2>16%</h2>
            <p>Growth in pharmaceutical distribution</p>
          </div>
          <div className={styles.stat}>
            <h2>1.25x</h2>
            <p>Expanded patient outreach</p>
          </div>
          <div className={styles.stat}>
            <h2>20%</h2>
            <p>Enhanced prescription accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
