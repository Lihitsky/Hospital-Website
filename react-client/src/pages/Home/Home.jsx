import { AboutUs } from "../../components/Sections/about-us/AboutUs";
import { ContactBar } from "../../components/Sections/contact-bar/ContactBar";
import { OurServices } from "../../components/Sections/our-services/OurServices";
import { WhyUs } from "../../components/Sections/why-us/WhyUs";
import { BookAppointment } from "../../components/Sections/book-appointment/BookAppointment";
import { RecentNews } from "../../components/Sections/recent-news/RecentNews";
import { Hero } from "../../components/Sections/hero/Hero";
import { Header } from "../../components/Header";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        {/* <Hero />
        <ContactBar />
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
