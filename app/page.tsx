// import Navbar from "./_components/LandingPage/Navbar";
import Navbar from './_components/landingPage/navbar';
import TitleSection from "./_components/landingPage/titleSection";
import CoreTechSection from "./_components/landingPage/coreTechSection";
import FirstInfoSection from "./_components/landingPage/firstinfoSection";
import SecondInfoSection from "./_components/landingPage/secondInfoSection";
import TeamInfoSection from "./_components/landingPage/teamInfoSection";
import MediumArticleSection from "./_components/landingPage/mediumSection";
import Footer from "./_components/landingPage/footerSection";

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
