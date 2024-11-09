import { AboutUs } from "./Sections/AboutUs";
import { ContactBar } from "./Sections/ContactBar";
import { OurDoctors } from "./Sections/OurDoctors";
import { WhyUs } from "./Sections/WhyUs";
import { BookAppointment } from "./Sections/BookAppointment";
import { RecentNews } from "./Sections/RecentNews";
import { Hero } from "./Sections/Hero";
import { Header } from "../../components/Header";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <Hero />
        <ContactBar />
        <AboutUs />
        <WhyUs />
        <OurDoctors />
        {/* <BookAppointment />
        <RecentNews /> */}
      </div>
    </div>
  );
}

export default Home;
