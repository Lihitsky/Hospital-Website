import { AboutUs } from "./Sections/AboutUs";
import { ContactBar } from "./Sections/ContactBar";
import { OurDoctors } from "./Sections/OurDoctors";
import { WhyUs } from "./Sections/WhyUs";
import { Hero } from "./Sections/Hero";
import { Feedback } from "../../components/Feedback";

export const Home = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Hero />
        <ContactBar />
        <AboutUs />
        <WhyUs />
        <OurDoctors />
        <Feedback />
      </div>
    </div>
  );
};
