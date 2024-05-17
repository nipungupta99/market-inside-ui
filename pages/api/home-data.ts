import {
  heroData,
  introVideoData,
  ImportExportData,
  serviceSectiondata,
  productConstants,
} from "@/data";
import { ServiceConstants } from "@/types/ServiceConstantsType";
import { HeroData } from "@/types/heroSectionType";
import { ImportExportData as ImportExportDataType } from "@/types/importExportType";
import { IntroVideoData } from "@/types/introVideoType";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  heroData: HeroData;
  introVideoData: IntroVideoData;
  ImportExportData: ImportExportDataType;
  serviceSectiondata: ServiceConstants;
  productConstants: AccordionItemData[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    heroData,
    introVideoData,
    ImportExportData,
    serviceSectiondata,
    productConstants,
  });
}
