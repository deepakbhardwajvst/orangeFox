import ReviewAndEarn from "@/UiComponent/ReviewAndEarn/ReviewAndEarn";
import HeroSection from "./../UiComponent/HeroSection/HeroSection";
import UnlockGrowthPlan from "@/UiComponent/UnlockGrowthPlan/UnlockGrowthPlan";
import HowItWorks from "@/UiComponent/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewAndEarn />
      <HowItWorks />
      <UnlockGrowthPlan />
    </>
  );
}
