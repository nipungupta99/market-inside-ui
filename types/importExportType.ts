export interface TabContent {
  image: string;
  text?: string;
  data?: string[];
}

export interface TabData {
  title: string;
  content: TabContent;
}

export interface ImportExportData {
  tabsData: TabData[];
  sectionTitle: {
    highlight: String;
    normal: String;
  };
  sectionDescription: String;
  tabImages: {
    default: String;
  };
}
