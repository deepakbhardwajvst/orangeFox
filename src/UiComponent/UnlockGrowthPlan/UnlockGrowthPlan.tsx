"use client";
import React, { useState } from "react";
import styles from "./UnlockGrowthPlan.module.css";
const UnlockGrowthPlan: React.FC = () => {
  // State to manage which items are expanded
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    new Array(6).fill(false)
  );

  // Function to toggle the expansion of an item
  const toggleItem = (index: number) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={styles.ugp}>
      <div className={styles.header}>
        <h1>Simple Way to Unlock Growth Plan worth $500</h1>
        <p>Boost your online presence for FREE</p>
      </div>
      <div className={styles.faqSection}>
        <h2>FAQs</h2>
        <p>
          Still have questions about Scalenuts Reward Program? Write to us at
          wecare<i>@scalenut.com</i>
        </p>
        <ul className={styles.faqdata}>
          {faqData.map((item, index) => (
            <li
              key={index}
              className={expandedItems[index] ? styles.faqdatali : ""}
            >
              <div className={styles.faqItem} onClick={() => toggleItem(index)}>
                <span>{item.question}</span>

                {expandedItems[index] && <p>{item.answer}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// FAQ data
const faqData = [
  {
    question: "Who is eligible for the Earn Credits Program?",
    answer: "All our registered users are eligible to participate",
  },
  {
    question: "Who is eligible for giving us reviews under this program?",
    answer: "Answer to the second question...",
  },
  {
    question: "How much can I earn through Scalenut's Earn Credits Program?",
    answer: "Answer to the third question...",
  },
  {
    question: "How will I get these rewards?",
    answer: "Answer to the fourth question...",
  },
  {
    question:
      "What kind of blogs and videos will be eligible for free Growth Plan access?",
    answer: "Answer to the fifth question...",
  },
  {
    question: "Other Terms & Conditions",
    answer: "Answer to the sixth question...",
  },
];

export default UnlockGrowthPlan;
