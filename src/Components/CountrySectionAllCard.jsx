import { useLoaderData, useParams } from "react-router-dom";
import CountrySectionCard from "./CountrySectionCard";
import { Helmet } from "react-helmet-async";

const CountrySectionAllCard = () => {
  const countryTouristSpots = useLoaderData();
  const { name } = useParams();
  const countryTouristSpot = countryTouristSpots.filter(
    (countryTouristSpot) => countryTouristSpot.countryName == name,
  );
  return (
    <div className="container mx-auto mt-10 grid grid-cols-6 gap-6">
      <Helmet><title>{name}</title></Helmet>
      {countryTouristSpot.map((touristSpot) => {
        return (
          <CountrySectionCard
            key={touristSpot._id}
            touristSpot={touristSpot}
          ></CountrySectionCard>
        );
      })}
    </div>
  );
};

export default CountrySectionAllCard;
