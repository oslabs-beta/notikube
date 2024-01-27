import Navbar from "./_components/LandingPage/navbar";
import TitleSection from "./_components/LandingPage/titleSection";
import CoreTechSection from "./_components/LandingPage/coreTechSection";
import FirstInfoSection from "./_components/LandingPage/firstinfoSection";
import SecondInfoSection from "./_components/LandingPage/secondInfoSection";
import TeamInfoSection from "./_components/LandingPage/teamInfoSection";
import MediumArticleSection from "./_components/LandingPage/MediumSection";
import Footer from "./_components/LandingPage/footerSection";

export default function LandingPage() {
  return (
    <div>
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
