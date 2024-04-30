import PropTypes from "prop-types";

const AllTouristSpotCard = ({ touristSpot }) => {
  console.log(touristSpot);
  const {
    _id,
    spotName,
    imageUrl,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = touristSpot;
  console.log(_id, averageCost);
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={imageUrl} alt="" />
        </figure>
        <div className="card-body p-6">
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

          <button className="btn btn-outline mt-3 w-full">View Details</button>
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
