import styles from "./HeroSection.module.css";
import Image from "next/image";
const HeroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/scale.svg"
        className={styles.imgBox}
        width={500}
        height={500}
        priority={true}
        alt="Home Logo"
      />
      <h2 className={styles.title}>6 Months Growth Plan Giveaway</h2>

      <p className={styles.description}>
        Get more out of Scalenut with our Rewards program. Free Growth <br />{" "}
        Plan and referral credits up for grabs to maximize your savings.
      </p>
      <button className={styles.button}>
        <h2 className="">Referral Program</h2>
        <p className="">
          Earn credits by sharing with friends, relatives, and people you know
        </p>
      </button>
    </div>
  );
};

export default HeroSection;
