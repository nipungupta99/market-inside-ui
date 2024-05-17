import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import VerticalTabs from "./VerticalTabs";

const ImportExportDataSection = () => {
  const tabData = [
    {
      title: "All Data",
      content: {
        image: "/assets/import-export-map.webp",
        data: [
          "195+ Countries Trade Data",
          "29 Exclusive Countries",
          "54 Detailed Countries",
          "190+ Transit Data",
          "190+ Cargo BL Data",
        ],
      },
    },
    {
      title: "Detailed Data",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "STATISTICAL data",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "MIRROR data",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "BILL OF LADING",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "SC BILL OF LADING",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "TRANSIT DATA",
      content: {
        image: "/assets/import-export-map.webp",
        text: "content for tabs",
      },
    },
    {
      title: "CARGO BL DATA",
      content: {
        image: "/assets/import-export-map.webp",
        data: [
          "195+ Countries Trade Data",
          "29 Exclusive Countries",
          "54 Detailed Countries",
          "190+ Transit Data",
          "190+ Cargo BL Data",
        ],
      },
    },
  ];
  return (
    <section className="import-export-data">
      <div className="import-export-data__container">
        <h2 className="import-export-data__title import-export-data__title--highlight">
          195+ <br />
          COUNTRIES
        </h2>
        <h2 className="import-export-data__title">IMPORT EXPORT DATA ONLINE</h2>
        <p className="import-export-data__description">
          Market Inside Limited has one of the largest online searchable
          databases of importing and exporting countries, covering over 195
          Countries which consist of 54 Detailed Countries, 29 Exclusive
          Countries, 33 Statistical, 184 Mirror Data, 109 Suez Canal Bill Of
          Lading Data, 02 Bill Of Lading Data, 190+ Transit Data and 190+ Cargo
          BL Data countries.
        </p>
        <div className="import-export-data__tabs">
          <VerticalTabs tabData={tabData} />
        </div>
      </div>
    </section>
  );
};

export default ImportExportDataSection;
