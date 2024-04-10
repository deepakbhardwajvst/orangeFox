import React from "react";
import Image from "next/image";
import "./ReviewAndEarn.css";

interface ReviewItem {
  src: string;
  planText: string;
  freeText: string;
  planText2: string;
  reviewText: string;
  linkData: string;
  reviewText2: string;
}

interface ReviewData {
  section: ReviewItem[];
}

const ReviewAndEarn: React.FC = () => {
  // Define data for each section
  const reviewData: ReviewData[] = [
    {
      section: [
        {
          src: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195093fc8ddb5_g2-seeklogo.com.svg",
          planText: "Free",
          freeText: "1-month",
          planText2: "Growth Plan",
          reviewText: "Write an honest review of Scalenut on ",
          linkData: "G2",
          reviewText2: "",
        },
        {
          src: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be6ab5ee5732ec1fe19bc9_Capterra.svg",
          planText: "Free",
          freeText: "Free 1-month",
          planText2: "Growth Plan",
          reviewText: "Write an honest review of Scalenut on ",
          linkData: " Capterra",
          reviewText2: "",
        },
      ],
    },
    {
      section: [
        {
          src: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be70efee57322a20e1e46f_Blog.svg",
          planText: "Free",
          freeText: "1-month",
          planText2: "Growth Plan",
          reviewText: "Write a ",
          linkData: " blog reviewing Scalenut",
          reviewText2:
            ", highlighting its features and your personal experience",
        },
        {
          src: "https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195876cc8dda4_icons8-youtube-96.webp",
          planText: "Free",
          freeText: "Free 1-month",
          planText2: "Growth Plan",
          reviewText: "Create a ",
          linkData: " Youtube video ",
          reviewText2:
            "reviewing Scalenut, walk-through of its features and functions",
        },
      ],
    },
  ];

  return (
    <div className="review-container">
      {reviewData.map((section, sectionIndex) => (
        <div className="re-box" key={sectionIndex}>
          <div className="re-heading">
            <h5 className="long-form-title">Review & Earn</h5>
          </div>
          <div className="review-card">
            {section.section.map((item, itemIndex) => (
              <div className="review-item" key={itemIndex}>
                <div className="review-content">
                  <Image
                    src={item.src}
                    alt=""
                    width={500}
                    height={500}
                    className="review-image"
                    priority
                  />
                  <p className="plan-text">{item.planText}</p>
                  <p className="free-text">{item.freeText}</p>
                  <p className="plan-text p12">{item.planText2}</p>
                  <p className="review-text">
                    {item.reviewText}
                    {item.reviewText2 === "" ? (
                      <a href="https://example.com/capterra-review">
                        <strong>
                          <u>{item.linkData}</u>
                        </strong>
                      </a>
                    ) : (
                      <a href="https://example.com/capterra-review">
                        <strong>{item.linkData}</strong>
                      </a>
                    )}
                    {item.reviewText2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewAndEarn;
