import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "./Button";

const TabSection = ({ title }: { title: string }) => {
  return (
    <div className="tab-section">
      <div className="tab-section__content">
        <h2 className="tab-section__title">{title}</h2>
        <p className="tab-section__description">
          Discover sources of buying products by connecting with potential
          suppliers while keeping an eye on the shipments through the global
          trade intelligence platform online.
        </p>
        <div className="tab-section__button-wrapper">
          <Button className="tab-section__button">READ MORE...</Button>
        </div>
      </div>
      <div className="tab-section__image-wrapper">
        <Image
          src="/assets/service-section-image1.png"
          alt="services-section-image"
          width="550"
          height="550"
          className="tab-section__image"
        />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services__container">
        <Tabs>
          <TabList>
            <Tab>IMPORTER</Tab>
            <Tab>EXPORTER</Tab>
            <Tab>LOGISTICS</Tab>
            <Tab>LAW FIRMS</Tab>
            <Tab>CORPORATIONS</Tab>
            <Tab>INSURANCE COMPANIES</Tab>
            <Tab>RESEARCH & CONSULTING</Tab>
          </TabList>

          <TabPanel>
            <TabSection title="IMPORTER" />
          </TabPanel>
          <TabPanel>
            <TabSection title="EXPORTER" />
          </TabPanel>
          <TabPanel>
            <TabSection title="LOGISTICS" />
          </TabPanel>
          <TabPanel>
            <TabSection title="LAW FIRMS" />
          </TabPanel>
          <TabPanel>
            <TabSection title="CORPORATIONS" />
          </TabPanel>
          <TabPanel>
            <TabSection title="INSURANCE COMPANIES" />
          </TabPanel>
          <TabPanel>
            <TabSection title="RESEARCH & CONSULTING" />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
