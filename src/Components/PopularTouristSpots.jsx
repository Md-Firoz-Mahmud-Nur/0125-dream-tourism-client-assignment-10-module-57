import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";

const PopularTouristSpots = () => {
  const popularTouristSpots = useLoaderData();

  const popularTouristSpots1stSixData = popularTouristSpots.slice(0, 6);
  return (
    <div>
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold "
      >
        Popular Tourist Spot.
        <p className="mt-2 text-lg">
          Explore the most sought-after destinations with breathtaking scenery
          and rich cultural experiences.
        </p>
      </h1>
      <div className="grid grid-cols-6 gap-6">
        {popularTouristSpots1stSixData.map((touristSpot) => {
          return (
            <AllTouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></AllTouristSpotCard>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTouristSpots;
