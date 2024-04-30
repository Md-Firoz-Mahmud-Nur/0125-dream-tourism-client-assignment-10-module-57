import BannerLandingPage from "./BannerLandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import FaqAccordion from "./FaqAccordion";
import ReviewFeedback from "./ReviewFeedback";
import PopularTouristSpots from "./PopularTouristSpots";
AOS.init();

const Home = () => {
  return (
    <div className="container mx-auto">
      <BannerLandingPage></BannerLandingPage>
      <Carousel></Carousel>
      <PopularTouristSpots></PopularTouristSpots>
      <ReviewFeedback></ReviewFeedback>
      <FaqAccordion></FaqAccordion>
    </div>
  );
};

export default Home;
