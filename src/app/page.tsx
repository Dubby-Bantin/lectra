import AboutSection from "@/components/landing/AboutSection";
import { BackGroundBeams } from "@/components/landing/BackGroundBeams";
import Banner from "@/components/landing/Banner";
import Benefits from "@/components/landing/Benefits";
import DemoSection from "@/components/landing/DemoSection";
import FAQSection from "@/components/landing/Faqs";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import { log } from "console";
import { cookies } from "next/headers";

const Home = () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  log(userId);
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <AboutSection />
      <DemoSection />
      <FAQSection />
      <Benefits />
      <BackGroundBeams />
      <Footer />
    </div>
  );
};

export default Home;
