import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>How It Works</h2>
      <div className={styles.stepContainer}>
        <div className={styles.step}>
          <div className={styles.stepIcon}>01</div>
          <h3>Create</h3>
          <p>
            Post reviews, create content and share about-out in your social
            media
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepIcon}>02</div>
          <h3>Submit</h3>
          <p>
            Submit the published URLs with us via chat or email us at
            wecare@scalenut.com
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepIcon}>03</div>
          <h3>Earn</h3>
          <p>
            We will upgrade your account to the Growth Plan after verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
