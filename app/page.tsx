import Navbar from "./_components/LandingPage/Navbar";
import TitleSection from "./_components/LandingPage/TitleSection";
import CoreTechSection from "./_components/LandingPage/CoreTechSection";
import FirstInfoSection from "./_components/LandingPage/FirstInfoSection";
import SecondInfoSection from "./_components/LandingPage/SecondInfoSection";
import TeamInfoSection from "./_components/LandingPage/TeamInfoSection";
import MediumArticleSection from "./_components/LandingPage/MediumSection";
import Footer from "./_components/LandingPage/FooterSection";

export default function LandingPage() {
  return (
    <div className="pt-10">
      <Navbar />
      <TitleSection />
      <CoreTechSection />
      <FirstInfoSection />
      <SecondInfoSection />
      <TeamInfoSection />
      <MediumArticleSection />
      <Footer />
    </div>
  );
}
