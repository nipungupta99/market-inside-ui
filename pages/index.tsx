import HeroSection from "../components/HeroSection";
import IntroVideoSection from "../components/IntroVideoSection";
import ImportExportDataSection from "../components/ImportExportDataSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import CallToActionSection from "../components/CallToActionSection";
import useDeviceType from "@/hooks/useDeviceType";
import { ImportExportData, heroData, introVideoData } from "@/data";

const Home = () => {
  const isMobile = useDeviceType();
  return (
    <>
      <HeroSection heroData={heroData} />
      <IntroVideoSection introVideoData={introVideoData} />
      {!isMobile && <ImportExportDataSection sectionData={ImportExportData} />}
      <ServicesSection />
      <ProductsSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
