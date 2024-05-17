import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import VerticalTabs from "./VerticalTabs";
import { ImportExportData } from "@/types/importExportType";

const ImportExportDataSection = ({
  sectionData,
}: {
  sectionData: ImportExportData;
}) => {
  return (
    <section className="import-export-data">
      <div className="import-export-data__container">
        <h2 className="import-export-data__title import-export-data__title--highlight">
          {sectionData.sectionTitle.highlight}
        </h2>
        <h2 className="import-export-data__title">
          {sectionData.sectionTitle.normal}
        </h2>
        <p className="import-export-data__description">
          {sectionData.sectionDescription}
        </p>
        <div className="import-export-data__tabs">
          <VerticalTabs tabData={sectionData.tabsData} />
        </div>
      </div>
    </section>
  );
};

export default ImportExportDataSection;
