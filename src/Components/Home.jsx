import BannerLandingPage from "./BannerLandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import FaqAccordion from "./FaqAccordion";
import ReviewFeedback from "./ReviewFeedback";
import PopularTouristSpots from "./PopularTouristSpots";
import CountrySection from "./CountrySection";
import { Helmet } from "react-helmet-async";
AOS.init();

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container mx-auto">
        <BannerLandingPage></BannerLandingPage>
        <Carousel></Carousel>
        <CountrySection></CountrySection>
        <PopularTouristSpots></PopularTouristSpots>
        <ReviewFeedback></ReviewFeedback>
        <FaqAccordion></FaqAccordion>
      </div>
    </>
  );
};

export default Home;
