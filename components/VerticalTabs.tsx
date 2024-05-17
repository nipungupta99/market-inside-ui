import Image from "next/image";
import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCheck } from "react-icons/fa6";

interface TabData {
  title: string;
  content: any;
}

interface VerticalTabsProps {
  tabData: TabData[];
}
const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabData }) => {
  return (
    <Tabs className="vertical-tabs">
      <TabList className="vertical-tablist">
        {tabData.map((tab, index) => (
          <Tab
            className="vertical-tab  flex  py-4 [&>div]:border-white rounded-md "
            selectedClassName="[&>div]:border-[#ff8f00] border-2 border-r-0 border-[#ff8f00] border-r-4 border-r-white mr-[-2px] z-10 flex flex-row gap-10   justify-between items-between "
            key={index}
          >
            <p className="px-4">{tab.title}</p>
            <div className="h-[50px] border " />
          </Tab>
        ))}
      </TabList>

      {tabData.map((tab, index) => (
        <TabPanel
          //   className="min-w-full hidden border border-red-500"
          //   selectedClassName="w-[200px] border-2 border-[#ff8f00]"
          key={index}
        >
          <div className="vertical-tab-panel-container ">
            <div className="w-[calc(100vw-300px)] p-10">
              <Image
                src={tab.content.image}
                alt="tab-image"
                width="700"
                height="700"
              />
            </div>
            {tab.content.text && <p>{tab.content.text}</p>}
            <div className="grid grid-cols-3 gap-4 p-10">
              {tab.content?.data?.map((item: string, idx: number) => (
                <p className="flex items-center" key={idx}>
                  <FaCheck /> {item}{" "}
                </p>
              ))}
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default VerticalTabs;
