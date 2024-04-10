import React from "react";
import styles from "./HowItWorks.module.css";
import Image from "next/image";

interface Step {
  title: string;
  description: JSX.Element;
  icon: string;
}

const stepsData: Step[] = [
  {
    title: "Create",
    description: (
      <p>
        Post <strong className={styles.strong}>reviews</strong>, create{" "}
        <strong className={styles.strong}>content</strong> and share{" "}
        <strong className={styles.strong}>shout-outs</strong> on your social
        media
      </p>
    ),
    icon: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg",
  },
  {
    title: "Submit",
    description: (
      <p>
        Submit the <strong className={styles.strong}>published URLs</strong>{" "}
        with us via chat or email us at{" "}
        <a href="/" className={styles.email}>
          wecare@scalenut.com
        </a>
      </p>
    ),
    icon: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg",
  },
  {
    title: "Earn",
    description: (
      <p>
        We will <strong className={styles.strong}>upgrade your account</strong>{" "}
        to the <strong className={styles.strong}>Growth Plan</strong> after
        verification.
      </p>
    ),
    icon: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h2 className={styles.headig}>How It Works</h2>
        <div className={styles.stepContainer}>
          {stepsData.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.topbox}>
                <div className={styles.stepIcon}>{`0${index + 1}`}</div>
                <Image
                  src={step.icon}
                  width={500}
                  height={500}
                  priority
                  className={styles.image}
                  alt="step image"
                />
              </div>
              <h3>{step.title}</h3>
              {step.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
