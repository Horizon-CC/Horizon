import { Achieve_Carousel } from "../components/AchievementCarousel";
import { Achievementdata } from "@/data/achievementdata";

export default function Achievement() {
  return (
    <div className="h-[70vh] md:h-[80vh] w-full flex items-center">
      <Achieve_Carousel
        images={Achievementdata}
        autoplay={true}
        loop={true}
        showNavigation={true}
        showPagination={true}
      />
    </div>
  );
}
