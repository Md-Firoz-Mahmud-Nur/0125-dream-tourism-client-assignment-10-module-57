import { Typewriter } from "react-simple-typewriter";

const BannerLandingPage = () => {
  return (
    <h1
      data-aos="fade-right"
      data-aos-duration="1500"
      className="my-5 rounded-t-lg  py-10 text-center text-2xl md:text-4xl font-semibold "
    >
      Enjoy with {" "}
      <Typewriter
        loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        words={["Dream Tourism"]}
      />
      <p className="mt-2 text-lg">
        Explore your ideal destination effortlessly with our innovative and
        stress-free approach.
      </p>
    </h1>
  );
};

export default BannerLandingPage;
