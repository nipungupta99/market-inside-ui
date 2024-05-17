import HeroSection from "../components/HeroSection";
import IntroVideoSection from "../components/IntroVideoSection";
import ImportExportDataSection from "../components/ImportExportDataSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import CallToActionSection from "../components/CallToActionSection";
import useDeviceType from "@/hooks/useDeviceType";

const Home = () => {
  const isMobile = useDeviceType();
  return (
    <>
      <HeroSection />
      <IntroVideoSection />
      {!isMobile && <ImportExportDataSection />}
      <ServicesSection />
      <ProductsSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
