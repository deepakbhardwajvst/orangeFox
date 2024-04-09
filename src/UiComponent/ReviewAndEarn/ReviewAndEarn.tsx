import Image from "next/image";

const ReviewAndEarn: React.FC = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h5>Review & Earn</h5>
      <div
        style={{ padding: "1rem", boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "0.5rem" }}>
            <Image
              width={500}
              height={500}
              priority={true}
              src=""
              style={{width:"24px",height:"24px"}}
              alt="G2 Icon"
            />
          </button>
          <div>
            <p>Free 1-month</p>
            <p>Growth Plan</p>
            <p>Write an honest review of Scalenut on G2</p>
          </div>
        </div>
      </div>
      <div
        style={{ padding: "1rem", boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "0.5rem" }}>
            <Image
              width={500}
              height={500}
              priority={true}
              src=""
              style={{width:"24px",height:"24px"}}
              alt="Capterra Icon"
            />
          </button>
          <div>
            <p>Free 1-month</p>
            <p>Growth Plan</p>
            <p>Write an honest review of Scalenut on Capterra</p>
          </div>
        </div>
      </div>

      <h5 style={{ marginTop: "1rem" }}>Create Long-Form Content</h5>
      <div
        style={{ padding: "1rem", boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "0.5rem" }}>
            <Image
              width={500}
              height={500}
              priority={true}
              src=""
              style={{width:"24px",height:"24px"}}
              alt="Blog Icon"
            />
          </button>
          <div>
            <p>Free 2-months</p>
            <p>Growth Plan</p>
            <p>
              Write a blog reviewing Scalenut, highlighting its features and
              your personal experience
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ padding: "1rem", boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ marginRight: "0.5rem" }}>
            <Image
              width={500}
              height={500}
              priority={true}
              src=""
              style={{width:"24px",height:"24px"}}
              alt="Video Icon"
            />
          </button>
          <div>
            <p>Free 2-month</p>
            <p>Growth Plan</p>
            <p>
              Create a Youtube video reviewing Scalenut, walk-through of its
              features and functions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReviewAndEarn;
