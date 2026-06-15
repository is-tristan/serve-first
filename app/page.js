import Banner from "@/components/sections/banner";
import PlatformStory from "@/components/sections/platform-story";
import ProductHighlight from "@/components/sections/product-highlight";

export default function Home() {

  return (

    <>

      <Banner bannerType="home" />

      <PlatformStory />

      <PlatformStory theme="dark" />

      <ProductHighlight />

      <ProductHighlight theme="dark" />

    </>

  );

}