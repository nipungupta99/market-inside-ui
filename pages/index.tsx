import HeroSection from "../components/HeroSection";
import IntroVideoSection from "../components/IntroVideoSection";
import ImportExportDataSection from "../components/ImportExportDataSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import CallToActionSection from "../components/CallToActionSection";
import useDeviceType from "@/hooks/useDeviceType";
import {
  ImportExportData,
  heroData,
  introVideoData,
  productConstants,
  serviceSectiondata,
} from "@/data";
import { useEffect } from "react";
import { HeroData } from "@/types/heroSectionType";
import { IntroVideoData } from "@/types/introVideoType";
import { ServiceConstants } from "@/types/ServiceConstantsType";
import { ImportExportData as ImportExportDataType } from "@/types/importExportType";

interface MyData {
  message: string;
  heroData: HeroData;
  introVideoData: IntroVideoData;
  ImportExportData: ImportExportDataType;
  serviceSectiondata: ServiceConstants;
  productConstants: AccordionItemData[];
}

export const getServerSideProps = async () => {
  try {
    // Fetch data from the API route

    // URL TO BE ADDED IN ENV>>>
    const res = await fetch(
      "https://market-inside-ui.vercel.app/api/home-data"
    );
    const data: MyData = await res.json();
    console.log(data, "Dataa");

    // Return the data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
};

const Home = (props: { data: MyData }) => {
  const isMobile = useDeviceType();

  return (
    <>
      <HeroSection heroData={heroData} />
      <IntroVideoSection introVideoData={introVideoData} />
      {!isMobile && <ImportExportDataSection sectionData={ImportExportData} />}
      <ServicesSection serviceConstants={serviceSectiondata} />
      <ProductsSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
