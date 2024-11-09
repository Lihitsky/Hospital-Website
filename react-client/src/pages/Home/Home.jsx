import { AboutUs } from "./Sections/AboutUs";
import { ContactBar } from "./Sections/ContactBar";
import { OurServices } from "./Sections/OurServices";
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
        {/* <OurServices />
        <BookAppointment />
        <RecentNews /> */}
      </div>
    </div>
  );
}

export default Home;
