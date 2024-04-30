import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const ViewDetails = () => {
  const { id } = useParams();
  const viewDetails = useLoaderData();
  console.log(id);

  console.log();
  const viewDetail = viewDetails.find((viewDetail) => viewDetail._id == id);
  const {
    _id,
    averageCost,
    countryName,
    imageUrl,
    location,
    spotName,
    seasonality,
    shortDescription,
    totalVisitorsPerYear,
    travelTime,
    userEmail,
    userName,
  } = viewDetail;

  console.log(_id);

  return (
    <div>
      <div className="mt-12 flex-col gap-10 rounded-3xl border-2 border-black p-10 lg:flex lg:flex-row  ">
        <div className="  rounded-2xl ">
          <img
            className="  rounded-2xl   lg:w-[650px] "
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="flex-grow">
          <div className="gap-5 lg:flex">
            <p className="  flex items-center py-2 text-3xl font-semibold md:text-4xl md:font-bold ">
              {spotName}
              <span className="mx-2 flex items-center rounded-full border border-black px-4 py-3">
                <CiLocationOn /> {countryName}
              </span>
            </p>
          </div>

          <p className="my-1 text-xl font-bold text-[#131313CC]  ">
            Seasonality :{" "}
            <span className="  font-medium text-[#131313CC]  ">
              {seasonality}
            </span>
          </p>

          <h3 className=" text-xl font-bold  text-[#131313CC]  ">
            Total Visitors Per Year :
            <span className="pl-1 text-xl font-medium  text-[#131313CC]  ">
              {totalVisitorsPerYear}
            </span>
          </h3>
          <h2 className="  text-xl font-bold  text-[#131313CC] ">
            Travel Time :
            <span className="pl-1  text-xl font-medium  text-[#131313CC]  ">
              {travelTime}
            </span>
          </h2>
          <h2 className="  text-xl font-bold  text-[#131313CC] ">
            location :
            <span className="pl-1  text-xl font-medium  text-[#131313CC]  ">
              {location}
            </span>
          </h2>
          <h2 className=" flex text-xl font-bold  text-[#131313CC] ">
            Added By :
            <span className="flex  pl-1 text-xl font-medium text-[#131313CC]  ">
              {userName} <div className="pl-2">({userEmail})</div>
            </span>
          </h2>
          <h2
            className="text-xl font-bold
            "
          >
            Price:
            {averageCost}
          </h2>
          <div className=" gap-5   md:my-4 md:flex">
            <h2 className="  text-xl font-bold  text-[#131313CC] ">
              shortDescription :
              <span className="  text-xl font-medium  text-[#131313CC]  ">
                {shortDescription}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
