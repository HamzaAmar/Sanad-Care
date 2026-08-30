import HeroSection from "../../hero";
// import Testimonials from "../../testimonials";
import DoctorSection from "./components/doctor";
import FamilySection from "./components/family";
import { HomeNursingSeoSections } from "./components/homeNursing";
import MedicalTourism from "./components/medicalTourism";
import PatientSection from "./components/patient";
// import Services from "./components/services";
import WhyUs from "./components/whyUs";

export default function Home() {
  return (
    <div className="home-page Sf-6">
      <HeroSection />
      {/* <Services /> */}
      <WhyUs />
      <MedicalTourism />
      <DoctorSection />
      <FamilySection />
      <PatientSection />
      <HomeNursingSeoSections />
      {/* <Testimonials showAll={false} /> */}
    </div>
  );
}
