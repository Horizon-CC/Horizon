import { ThemeProvider } from "@/components/theme/theme-provider";
import Hero from "./pages/hero";
import ContactBanner from "./pages/contact";
import Banner from "./components/Banner";
import About from "./pages/about";
import LeadMembers from "./pages/lead members";
import Projects from "./pages/projects";
import PartnerCarousel from "./pages/partners";
// import Achievement from "./pages/achievements";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SmoothCursor />
      <div className="flex min-h-svh flex-col items-center justify-center cursor-none">
        <Hero />
        <About id="about-section" />
        <Banner
          titleLine1="We don’t build alone"
          titleLine2="Meet our partners"
          nextpage="03 Partner"
          boxColor="#F7F7FF"
          boxRevealPosition="top"
        />
        <PartnerCarousel />
        {/* Achievement Banner and Page commented out
        <Banner
          titleLine1="Lorem ipsum dolor"
          titleLine2="Lorem ipsum dolor"
          nextpage="04 Achievements"
          boxColor="#F7F7FF"
        />
        <Achievement/>
        */}
        <Banner
          titleLine1="Build, Break, Fix, Repeat."
          titleLine2="Our projects tell the story"
          nextpage="05 Projects"
          boxColor="#F7F7FF"
        />
        <Projects />
        <Banner
          titleLine1="The people behind Horizon"
          titleLine2="Builders, leaders & solvers"
          nextpage="06 Lead Members"
          boxColor="#F7F7FF"
        />
        <LeadMembers />
        <Banner
          titleLine1="Curious enough to start?"
          titleLine2="Get in touch with Horizon"
          nextpage="07 Contact"
          boxColor="#F7F7FF"
        />
        <ContactBanner />
      </div>
    </ThemeProvider>
  );
}

export default App;
