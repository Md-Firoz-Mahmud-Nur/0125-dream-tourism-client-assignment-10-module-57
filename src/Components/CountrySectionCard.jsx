import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountrySectionCard = ({ touristSpot }) => {
  const {
    _id,
    spotName,
    imageUrl,
    averageCost,
    seasonality,
    countryName,
    location,
    shortDescription,
  } = touristSpot;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="col-span-6 md:col-span-3 lg:col-span-2 "
    >
      <div className="card flex h-full w-full border border-black bg-base-100 shadow-xl">
        <figure className="max-h-56 flex-grow">
          <img className="h-full w-full object-cover" src={imageUrl} alt="" />
        </figure>
        <div className="card-body flex-grow-0 p-6">
          <h2 className="card-title text-3xl">{spotName}</h2>

          <p>
            Country :<span className="text-lg font-bold">{countryName}</span>
          </p>
          <p>
            Location :<span className="text-lg font-bold">{location}</span>
          </p>
          <p>
            Best Time Fot visit :
            <span className="text-lg font-bold">{seasonality}</span>
          </p>
          <p>
            Short Description :
            <span className="text-lg font-medium">
              {shortDescription.length > 60
                ? shortDescription.substring(0, 60) + "..."
                : shortDescription}
            </span>
          </p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-black p-4 text-2xl text-white">
              {averageCost} $
            </div>
          </div>

          <Link
            to={`/viewDetails/${_id}`}
            className="btn btn-outline mt-3 w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

CountrySectionCard.propTypes = {
  touristSpot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    spotName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    averageCost: PropTypes.number.isRequired,
    seasonality: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountrySectionCard;
