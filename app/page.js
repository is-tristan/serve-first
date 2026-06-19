import Banner from "@/components/sections/banner/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import FeatureList from "@/components/sections/feature-list/feature-list";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import IndustryCards from "@/components/sections/industry-cards/industry-cards";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import RoleContext from "@/components/sections/role-context/role-context";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import CustomerStory from "@/components/sections/customer-story/customer-story";
import Testimonials from "@/components/sections/testimonials/testimonials";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import CtaBannerTwo from "@/components/sections/cta-banners/cta-banner-2";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import Faq from "@/components/sections/faq/faq";
import LogoBar from "@/components/sections/logo-bar/logo-bar";

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

      <IndustryCards />

      <IndustryCards theme="dark" />

      <ModuleStats />

      <ModuleStats theme="dark" />

      <RoleContext />

      <RoleContext theme="dark" />

      <ChallengeFrame />

      <ChallengeFrame theme="dark" />

      <CustomerStory />

      <CustomerStory theme="dark" />

      <Testimonials />

      <Testimonials theme="dark" />

      <EvaSpotlight />

      <EvaSpotlight theme="dark" />

      <CtaBannerOne />

      <CtaBannerOne theme="dark" />

      <CtaBannerTwo />

      <CtaBannerTwo theme="dark" />

      <ContentGrid />

      <ContentGrid theme="dark" />

      <Faq />

      <Faq theme="dark" />

      <LogoBar />

      <LogoBar theme="dark" />

    </>

  );

}