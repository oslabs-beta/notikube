import Image from "next/image";
import Link from "next/link";
import Navbar from "./_components/landingPage/navbar";
import TitleSection from "./_components/landingPage/titleSection";
import CoreTechSection from "./_components/landingPage/coreTechSection";
import FirstInfoSection from "./_components/LandingPage/firstinfoSection";
import SecondInfoSection from "./_components/landingPage/secondInfoSection";
import TeamInfoSection from "./_components/landingPage/teamInfoSection";
import MediumArticleSection from "./_components/landingPage/mediumSection";
import Footer from "./_components/landingPage/footerSection";
export default function LandingPage() {
  
 
   /* Navbar */
  /* ATF (Above The Fold) Section */
   /* Core Technologies Section */
   /* First Informational Section - Dashboard View */
   /* Second Informational Section - Incidents View */
  /* Our Team Section */
  /* Medium Article Section */
  /* Footer Section */
  return (
    <div className='pt-10'>
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
