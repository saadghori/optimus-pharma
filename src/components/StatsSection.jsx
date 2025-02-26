import styles from "@/styles/StatsSection.module.css";
import AnimatedNumber from "./AnimatedNumber";

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsLeft}>
          <h1>
            <span className={styles.highlight}>
              <AnimatedNumber value={7} decimals={0} />
            </span>
            <span className={styles.boldText}> million</span>
          </h1>
          <p>Patients treated with our ophthalmic solutions.</p>
        </div>
        <div className={styles.statsRight}>
          <div className={styles.stat}>
            <h2>
              <AnimatedNumber value={1.8} suffix="x" decimals={1} duration={1500} />
            </h2>
            <p>Improved treatment efficiency</p>
          </div>
          <div className={styles.stat}>
            <h2>
              <AnimatedNumber value={16} suffix="%" duration={1500} />
            </h2>
            <p>Growth in pharmaceutical distribution</p>
          </div>
          <div className={styles.stat}>
            <h2>
              <AnimatedNumber value={1.25} suffix="x" decimals={2} duration={1500} />
            </h2>
            <p>Expanded patient outreach</p>
          </div>
          <div className={styles.stat}>
            <h2>
              <AnimatedNumber value={20} suffix="%" duration={1500} />
            </h2>
            <p>Enhanced prescription accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;