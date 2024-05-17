import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "./Button";
import { ServiceConstants } from "@/types/ServiceConstantsType";
// constants/servicesConstants.ts

const TabSection = ({
  serviceConstants,
  title,
}: {
  serviceConstants: ServiceConstants;
  title: string;
}) => {
  return (
    <div className="tab-section">
      <div className="tab-section__content">
        <h2 className="tab-section__title">{title}</h2>
        <p className="tab-section__description">
          {serviceConstants.servicesDescription}
        </p>
        <div className="tab-section__button-wrapper">
          <Button className="tab-section__button">
            {serviceConstants.buttonText}
          </Button>
        </div>
      </div>
      <div className="tab-section__image-wrapper">
        <Image
          src={serviceConstants.serviceImageDetails.src}
          alt={serviceConstants.serviceImageDetails.alt}
          width={serviceConstants.serviceImageDetails.width}
          height={serviceConstants.serviceImageDetails.height}
          className="tab-section__image"
        />
      </div>
    </div>
  );
};

const ServicesSection = ({ serviceConstants }: { serviceConstants: any }) => {
  return (
    <section className="services">
      <div className="services__container">
        <Tabs>
          <TabList>
            {serviceConstants.tabTitles.map((title: string) => (
              <Tab key={title}>{title}</Tab>
            ))}
          </TabList>

          {serviceConstants.tabTitles.map((title: string) => (
            <TabPanel key={title}>
              <TabSection title={title} serviceConstants={serviceConstants} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
