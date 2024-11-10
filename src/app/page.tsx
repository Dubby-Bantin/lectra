import AboutSection from "@/components/landing/AboutSection";
import { BackGroundBeams } from "@/components/landing/BackGroundBeams";
import Banner from "@/components/landing/Banner";
import Benefits from "@/components/landing/Benefits";
import DemoSection from "@/components/landing/DemoSection";
import FAQSection from "@/components/landing/Faqs";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";

const Home = () => (
  <>
    <Banner />
    <FeaturesSection />
    <AboutSection />
    <DemoSection />
    <FAQSection />
    <Benefits />
    <BackGroundBeams />
    <Footer />
  </>
);

export default Home;
