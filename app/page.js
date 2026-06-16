import Banner from "@/components/sections/banner";
import PlatformStory from "@/components/sections/platform-story";
import ProductHighlight from "@/components/sections/product-highlight";
import FeatureList from "@/components/sections/feature-list";
import HowItWorks from "@/components/sections/how-it-works";
import { howItWorksData } from "@/data/how-it-works-data";

export default function Home() {
  const howItWorksHeading = howItWorksData?.[0]?.heading || [];
  const howItWorksItems = howItWorksData?.[1]?.data || [];

  return (

    <>

      <Banner bannerType="home" />

      <PlatformStory />

      <PlatformStory theme="dark" />

      <ProductHighlight />

      <ProductHighlight theme="dark" />

      <FeatureList />

      <FeatureList theme="dark" />

      <HowItWorks heading={howItWorksHeading} data={howItWorksItems} />

      <HowItWorks theme="dark" heading={howItWorksHeading} data={howItWorksItems} />

    </>

  );

}