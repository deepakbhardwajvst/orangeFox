import React from "react";
import "./ReviewAndEarn.css"; // Import the CSS file
import Image from "next/image";

const ReviewAndEarn = () => {
  return (
    <div className="review-container">
      <div className="re-box ">
        <div className="re-heading">
          <h5 className="long-form-title">Review & Earn</h5>
        </div>

        <div className="review-card">
          <div className="review-item">
            <div className="review-content">
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195093fc8ddb5_g2-seeklogo.com.svg"
                alt=""
                width={500}
                height={500}
                className="review-image"
                priority
              />

              <p className="plan-text">Free</p>

              <p className="free-text">1-month</p>

              <p className="plan-text p12">Growth Plan</p>

              <p className="review-text">
                Write an honest review of Scalenut on{" "}
                <a href="">
                  <strong>
                    <u>G2</u>
                  </strong>
                </a>
              </p>
            </div>
          </div>

          <div className="review-item">
            <div className="review-content">
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be6ab5ee5732ec1fe19bc9_Capterra.svg"
                alt=""
                width={500}
                height={500}
                className="review-image"
                priority
              />
              <p className="plan-text">Free</p>
              <p className="free-text">Free 1-month</p>
              <p className="plan-text p12">Growth Plan</p>
              <p className="review-text">
                Write an honest review of Scalenut on{" "}
                <a href="">
                  <strong>
                    <u>Capterra</u>
                  </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="re-box ">
        <div className="re-heading">
          <h5 className="long-form-title">Review & Earn</h5>
        </div>

        <div className="review-card">
          <div className="review-item">
            <div className="review-content">
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be70efee57322a20e1e46f_Blog.svg"
                alt=""
                width={500}
                height={500}
                className="review-image"
                priority
              />

              <p className="plan-text">Free</p>

              <p className="free-text">1-month</p>

              <p className="plan-text p12">Growth Plan</p>

              <p className="review-text">
                Write a{" "}
                <a href="">
                  <strong>
                    <u>blog reviewing Scalenut</u>
                  </strong>
                </a>
                , highlighting its features and your personal experience
              </p>
            </div>
          </div>

          <div className="review-item">
            <div className="review-content">
              <Image
                src="https://assets-global.website-files.com/60ef088dd8fef919efabb412/636bb72d5fe195876cc8dda4_icons8-youtube-96.webp"
                alt=""
                width={500}
                height={500}
                className="review-image"
                priority
              />
              <p className="plan-text">Free</p>
              <p className="free-text">Free 1-month</p>
              <p className="plan-text p12">Growth Plan</p>
              <p className="review-text">
                Create a{" "}
                <a href="">
                  <strong>
                    <u>Youtube video</u>
                  </strong>
                </a>
                Youtube video reviewing Scalenut, walk-through of its features
                and functions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndEarn;
