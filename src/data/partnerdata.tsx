import { Partner01Logo01, Partner01Logo02, PartnerPHLogo, partnerPHImages } from "./images";
import {
  type FloatingImage,
  assignPartner01FloatingImages,
  assignPartnerPHFloatingImages,
} from "../constants/partnerconstants";

export { type FloatingImage };

export interface PartnerData {
  CompanyName: string;
  Description: string;
  floatingImages: FloatingImage[];
  showcaseimages: string[];
  highlightColor: string;
  textColor: string;
  backgroundColor: string;
  videoUrl?: string;
  partnerLink?: string;
}

export const partnersData: PartnerData[] = [
  {
    CompanyName: "NextWork",
    Description:
      "NextWork is a hands-on AWS learning platform where you don't just watch tutorials—you actually build stuff. It walks you through Cloud Engineering, DevSecOps, Solutions Architecture, and AI/ML with real projects, community support, and live documentation you can flex in interviews.",
    highlightColor: "#cc8764",
    backgroundColor: "#F8F5F1",
    textColor: "#1B1918",
    partnerLink: "https://www.nextwork.org/",
    floatingImages: assignPartner01FloatingImages(),
    showcaseimages: [Partner01Logo01, Partner01Logo02],
  },

  {
    CompanyName: "You",
    Description:
      "This space could be yours. If you're building something meaningful in cloud, dev, design, or tech education—and want to collaborate with a passionate student community—this is where your story starts.",
    highlightColor: "#965ECD",
    backgroundColor: "#F8F5F1",
    textColor: "#1B1918",
    partnerLink: "",
    floatingImages: assignPartnerPHFloatingImages(partnerPHImages),
    showcaseimages: [Partner01Logo01, PartnerPHLogo],
  },
];

