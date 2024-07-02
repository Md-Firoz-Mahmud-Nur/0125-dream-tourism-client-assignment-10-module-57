import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllTouristSpotCard = ({ touristSpot }) => {
  const {
    _id,
    spotName,
    imageUrl,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
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
            <h2 className="card-title text-3xl">
              {spotName}
              <div className="badge badge-outline">
                {totalVisitorsPerYear} Visitors
              </div>
            </h2>

            <p>
              Best Time Fot visit :
              <span className="text-lg font-bold">{seasonality}</span>
            </p>
            <p>
              Average Travel Time :
              <span className="text-lg font-bold">{travelTime}-Days</span>
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

AllTouristSpotCard.propTypes = {
  touristSpot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    spotName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    averageCost: PropTypes.number.isRequired,
    seasonality: PropTypes.string.isRequired,
    travelTime: PropTypes.number.isRequired,
    totalVisitorsPerYear: PropTypes.number.isRequired,
  }).isRequired,
};

export default AllTouristSpotCard;
