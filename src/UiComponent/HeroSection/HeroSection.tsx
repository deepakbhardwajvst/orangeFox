import styles from "./HeroSection.module.css";
const HeroSection: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgBox}>
      <img src="/scale.svg" alt="" className={styles.img} /></div>
      <h2 className={styles.title}>6 Months Growth Plan Giveaway</h2>
    
      <p className={styles.description}>
        Get more out of Scalenut with our Rewards program. Free Growth <br/> Plan and 
        referral credits up for grabs to maximize your savings.
      </p>
      <button className={styles.button}>Referral Program</button>
    </div>
  );
};

export default HeroSection;
