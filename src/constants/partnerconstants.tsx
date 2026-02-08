import { partner01HorizonImages, partner01NXTImages } from "../data/images";

// Layout type without url (used for initial layout configuration)
export interface FloatingImageLayout {
  depth: number;
  className: string;
  sizeClass: string;
}

// Full FloatingImage type with url
export interface FloatingImage extends FloatingImageLayout {
  url: string;
}

// Desktop layout: 4 images on each side (Horizon on left, NXT on right)
export const desktopLeft: FloatingImageLayout[] = [
  {
    depth: 1,
    className: "top-[12%] left-[10%] rotate-[-6deg] hidden md:block",
    sizeClass: "w-65 h-auto rounded-lg",
  },
  {
    depth: 2,
    className: "top-[25%] left-[8%] rotate-[-3deg] hidden md:block",
    sizeClass: "w-68 h-auto rounded-xl",
  },
  {
    depth: 3,
    className: "top-[43%] left-[6%] rotate-[0deg] hidden md:block",
    sizeClass: "w-58 h-auto rounded-xl",
  },
  {
    depth: 2,
    className: "top-[64%] left-[8%] rotate-[3deg] hidden md:block",
    sizeClass: "w-59 h-auto rounded-xl",
  },
];

export const desktopRight: FloatingImageLayout[] = [
  {
    depth: 1,
    className: "top-[10%] left-[73%] rotate-[6deg] hidden md:block",
    sizeClass: "w-54 h-auto rounded-lg",
  },
  {
    depth: 2,
    className: "top-[28%] left-[72%] rotate-[3deg] hidden md:block",
    sizeClass: "w-56 h-auto rounded-xl",
  },
  {
    depth: 3,
    className: "top-[45%] left-[73%] rotate-[0deg] hidden md:block",
    sizeClass: "w-58 h-auto rounded-xl",
  },
  {
    depth: 2,
    className: "top-[64%] left-[73%] rotate-[-3deg] hidden md:block",
    sizeClass: "w-59 h-auto rounded-xl",
  },
];

export const mobileTop: FloatingImageLayout[] = [
  {
    depth: 1,
    className: "top-[12%] left-[2%] rotate-[-8deg] md:hidden",
    sizeClass: "w-32 h-auto rounded-lg",
  },
  {
    depth: 2,
    className: "top-[9%] left-[22%] rotate-[-3deg] md:hidden",
    sizeClass: "w-24 h-auto rounded-xl",
  },
  {
    depth: 2,
    className: "top-[9%] left-[44%] rotate-[3deg] md:hidden",
    sizeClass: "w-25 h-auto rounded-xl",
  },
  {
    depth: 1,
    className: "top-[12%] left-[66%] rotate-[8deg] md:hidden",
    sizeClass: "w-28 h-auto rounded-lg",
  },
];

export const mobileBottom: FloatingImageLayout[] = [
  {
    depth: 1,
    className: "bottom-[12%] left-[2%] rotate-[8deg] md:hidden",
    sizeClass: "w-25 h-auto rounded-lg",
  },
  {
    depth: 2,
    className: "bottom-[11%] left-[22%] rotate-[3deg] md:hidden",
    sizeClass: "w-24 h-auto rounded-xl",
  },
  {
    depth: 2,
    className: "bottom-[11%] left-[44%] rotate-[-3deg] md:hidden",
    sizeClass: "w-26 h-auto rounded-xl",
  },
  {
    depth: 1,
    className: "bottom-[12%] left-[66%] rotate-[-8deg] md:hidden",
    sizeClass: "w-25 h-auto rounded-lg",
  },
];

export const floatingImageLayout: FloatingImageLayout[] = [
  ...desktopLeft,
  ...desktopRight,
  ...mobileTop,
  ...mobileBottom,
];

export const DESKTOP_LEFT_COUNT = desktopLeft.length; // 4
export const DESKTOP_RIGHT_COUNT = desktopRight.length; // 4
export const MOBILE_TOP_COUNT = mobileTop.length; // 4

export function assignPartner01FloatingImages(): FloatingImage[] {
  let index = 0;

  return floatingImageLayout.map((layout) => {
    let url: string;

    // Desktop LEFT → Horizon
    if (index < DESKTOP_LEFT_COUNT) {
      url = partner01HorizonImages[index % partner01HorizonImages.length];
    }
    // Desktop RIGHT → NXT
    else if (index < DESKTOP_LEFT_COUNT + DESKTOP_RIGHT_COUNT) {
      url = partner01NXTImages[(index - DESKTOP_LEFT_COUNT) % partner01NXTImages.length];
    }
    // Mobile TOP → Horizon
    else if (index < DESKTOP_LEFT_COUNT + DESKTOP_RIGHT_COUNT + MOBILE_TOP_COUNT) {
      url =
        partner01HorizonImages[
          (index - DESKTOP_LEFT_COUNT - DESKTOP_RIGHT_COUNT) % partner01HorizonImages.length
        ];
    }
    // Mobile BOTTOM → NXT
    else {
      url =
        partner01NXTImages[
          (index - DESKTOP_LEFT_COUNT - DESKTOP_RIGHT_COUNT - MOBILE_TOP_COUNT) %
            partner01NXTImages.length
        ];
    }

    index++;
    return { ...layout, url };
  });
}

export function assignPartnerPHFloatingImages(partnerPHImages: string[]): FloatingImage[] {
  let index = 0;

  return floatingImageLayout.map((layout) => {
    let url: string;

    // Desktop LEFT → Horizon
    if (index < DESKTOP_LEFT_COUNT) {
      url = partner01HorizonImages[index % partner01HorizonImages.length];
    }
    // Desktop RIGHT → PH
    else if (index < DESKTOP_LEFT_COUNT + DESKTOP_RIGHT_COUNT) {
      url = partner01HorizonImages[(index - DESKTOP_LEFT_COUNT) % partner01HorizonImages.length];
    }
    // Mobile TOP → Horizon
    else if (index < DESKTOP_LEFT_COUNT + DESKTOP_RIGHT_COUNT + MOBILE_TOP_COUNT) {
      url =
        partner01HorizonImages[
          (index - DESKTOP_LEFT_COUNT - DESKTOP_RIGHT_COUNT) % partner01HorizonImages.length
        ];
    }
    // Mobile BOTTOM → PH
    else {
      url = partnerPHImages[(index - DESKTOP_LEFT_COUNT - DESKTOP_RIGHT_COUNT - MOBILE_TOP_COUNT) % partnerPHImages.length];
    }

    index++;
    return { ...layout, url };
  });
}

