import HeroSection from "../../hero";
import Reviews from "../../reviews";
import FamilySection from "./components/family";
import { HomeNursingSeoSections } from "./components/homeNursing";
import MedicalTourism from "./components/medicalTourism";
import PatientSection from "./components/patient";
import WhyUs from "./components/whyUs";

export default function Home() {
  return (
    <div className="home-page Sf-6">
      <HeroSection />
      <WhyUs />
      <MedicalTourism />
      <FamilySection />
      <PatientSection />
      <Reviews />
      <HomeNursingSeoSections />
    </div>
  );
}
