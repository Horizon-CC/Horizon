"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, stagger, useAnimate} from "motion/react";
import { type EmblaCarouselType } from "embla-carousel";
import TextHighlighter, {
  type TextHighlighterRef,
} from "@/components/fancy/text/text-highlighter";
import Floating, {
  FloatingElement,
} from "@/components/fancy/image/parallax-floating";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { partnersData } from "@/data/partnerdata";
import { LinkPreview } from "@/components/ui/link-preview";

const PartnerSlide = ({
  floatingImages,
  showcaseimages,
  CompanyName,
  Description,
  highlightColor,
  partnerLink,
  fontClass,
}: {
  floatingImages: {
    url: string;
    sizeClass: string;
    depth: number;
    className: string;
  }[];
  CompanyName: string;
  Description: string;
  highlightColor: string;
  fontClass?: string;
  partnerLink?: string;
  showcaseimages: string[];
}) => {
  const [scope, animate] = useAnimate();
  const highlightRef = useRef<TextHighlighterRef>(null);

  useEffect(() => {
    if (!scope.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            animate(
              "img",
              { opacity: [0, 1] },
              { duration: 0.5, delay: stagger(0.15) }
            );
            animate(
              ".partner-text",
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.8, delay: 0.3 }
            );

            const timeout = setTimeout(() => {
              highlightRef.current?.animate();
            }, 1000);

            observer.disconnect();
            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: [0.9] }
    );

    observer.observe(scope.current);
    return () => observer.disconnect();
  }, [animate, scope]);

  return (
    <div
      ref={scope}
      className={`relative h-[80vh] w-full flex justify-center items-center overflow-hidden ${fontClass || ""
        }`}
    >
      {/* Centered content - vertically and horizontally */}
      <motion.div className="partner-text h-full justify-center text-center z-50 space-y-4 md:space-y-6 items-center flex flex-col opacity-0 px-4">
        {/* Fixed images */}
        {showcaseimages && showcaseimages.length >= 2 && (
          <div className="flex gap-3 md:gap-6 justify-center items-center">
            {showcaseimages.slice(0, 2).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`showcase-${index}`}
                className={`w-20 h-20 md:w-32 md:h-32 object-cover rounded-xl shadow-md transition-all 
                  ${index === 0
                    ? "hover:scale-115 hover:-rotate-3"
                    : "hover:scale-115 hover:rotate-3"
                  }`}
              />
            ))}
          </div>
        )}

        {/* Heading */}
        <div className="text-3xl md:text-5xl lg:text-7xl font-extrabold font-heading flex items-center flex-wrap justify-center">
          <span>Meet&nbsp;</span>
          <TextHighlighter
            ref={highlightRef}
            highlightColor={highlightColor}
            triggerType="ref"
          >
            {CompanyName}
          </TextHighlighter>
          {partnerLink && (
            <LinkPreview url={partnerLink} className="w-fit">
              <Button
                variant="link"
                size="icon"
                className="mx-2 md:mx-4 transition-all hover:scale-115"
                style={{ color: highlightColor }}
              >
                <ExternalLink className="size-4 md:size-6" />
              </Button>
            </LinkPreview>
          )}
        </div>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg font-body max-w-xs md:max-w-md text-center">
          {Description}
        </p>
      </motion.div>

      {/* Floating background */}
      <Floating sensitivity={0.2} className="absolute inset-0 overflow-hidden">
        {floatingImages.map((img, index) => (
          <FloatingElement
            key={index}
            depth={img.depth}
            className={img.className}
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={img.url}
              className={img.sizeClass}
            />
          </FloatingElement>
        ))}
      </Floating>
    </div>
  );
};

const PartnerCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!api) return;

    onScroll(api);
    api
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [api, onScroll]);

  return (
    <div className="relative h-[80vh] w-screen border-y-2 overflow-hidden">
      <Carousel
        setApi={setApi}
        className="h-full w-full"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent className="h-full w-full">
          {partnersData.map((partner, i) => (
            <CarouselItem key={i} className="h-full w-full overflow-hidden">
              <PartnerSlide {...partner} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop nav buttons */}
        <CarouselPrevious className="absolute bottom-0 left-0 h-[80vh] w-16 backdrop-blur-md border-none shadow-none z-20 items-center justify-center rounded-none hidden md:flex" />
        <CarouselNext className="absolute bottom-0 right-0 h-[80vh] w-16 backdrop-blur-md border-none shadow-none z-20 items-center justify-center rounded-none hidden md:flex" />

        {/* Mobile progress bar */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full overflow-hidden z-30 md:hidden">
          <div
            className="h-full bg-white rounded-full transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${scrollProgress - 100}%, 0px, 0px)`,
              width: "100%",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PartnerCarousel;

