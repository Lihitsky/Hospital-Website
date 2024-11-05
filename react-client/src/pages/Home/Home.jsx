import { AboutUs } from "../../components/Sections/AboutUs";
import { ContactBar } from "../../components/Sections/ContactBar";
import { OurServices } from "../../components/Sections/OurServices";
import { WhyUs } from "../../components/Sections/WhyUs";
import { BookAppointment } from "../../components/Sections/BookAppointment";
import { RecentNews } from "../../components/Sections/RecentNews";
import { Hero } from "../../components/Sections/Heros";
import { Header } from "../../components/Header";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <Hero />
        {/* <ContactBar />
        <AboutUs />
        <WhyUs />
        <OurServices />
        <BookAppointment />
        <RecentNews /> */}
      </div>
    </div>
  );
}

export default Home;
