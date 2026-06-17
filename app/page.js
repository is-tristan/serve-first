import Banner from "@/components/sections/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import FeatureList from "@/components/sections/feature-list/feature-list";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";

export default function Home() {

  return (

    <>

      <Banner bannerType="home" />

      <PlatformStory />

      <PlatformStory theme="dark" />

      <ProductHighlight />

      <ProductHighlight theme="dark" />

      <FeatureList />

      <FeatureList theme="dark" />

      <HowItWorks />

      <HowItWorks theme="dark" />

    </>

  );

}