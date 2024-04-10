import React from "react";
import styles from "./HowItWorks.module.css";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h2 className={styles.headig}>How It Works</h2>
        <div className={styles.stepContainer}>
          <div className={styles.step}>
            <div className={styles.topbox}>
              <div className={styles.stepIcon}>01</div>
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg"
                width={500}
                height={500}
                priority
                className={styles.image}
                alt="step image"
              />
            </div>
            <h3>Create</h3>
            <p>
              Post <strong>reviews</strong>, create <strong>content</strong> and share <strong>sbout-out</strong> on your social
              media
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.topbox}>
              <div className={styles.stepIcon}>02</div>
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg"
                width={500}
                height={500}
                priority
                className={styles.image}
                alt="step image"
              />
            </div>
            <h3>Submit</h3>
            <p>
              Submit the <strong>published URLs</strong> with us via chat or email us at
              <a href="/" className={styles.email}>wecare@scalenut.com</a>
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.topbox}>
              <div className={styles.stepIcon}>03</div>
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg"
                width={500}
                height={500}
                priority
                className={styles.image}
                alt="step image"
              />
            </div>
            <h3>Earn</h3>
            <p>
              We will upgrade your account to the Growth Plan after
              verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
