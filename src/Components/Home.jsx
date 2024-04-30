import BannerLandingPage from "./BannerLandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  return (
    <div>
      <BannerLandingPage></BannerLandingPage>
    </div>
  );
};

export default Home;