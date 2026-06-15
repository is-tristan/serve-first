import Banner from "@/components/sections/banner";
import PlatformStory from "@/components/sections/platform-story";

export default function Home() {

  return (

    <>

      <Banner bannerType="home" />

      <PlatformStory />

      <PlatformStory theme="dark" />

    </>

  );

}