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
    // seasonality,
    // shortDescription,
    // totalVisitorsPerYear,
    // travelTime,
    // userEmail,
    // userName,
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
            <p className="  flex py-2 text-3xl font-semibold md:text-4xl md:font-bold ">
              {spotName}
              <span className="mx-2 flex items-center rounded-full border border-black px-2 py-2">
                <CiLocationOn /> {countryName}
              </span>
            </p>
          </div>

          <p className="my-1 text-xl font-bold text-[#131313CC]  ">
            Type :<span className="  font-medium text-[#131313CC]  ">{}</span>
          </p>

          <h3 className=" text-xl font-bold  text-[#131313CC]  ">
            Description :
            <span className=" text-xl font-medium  text-[#131313CC]  ">{}</span>
          </h3>
          <h2 className="  text-xl font-bold  text-[#131313CC] ">
            Location :
            <span className="  text-xl font-medium  text-[#131313CC]  ">
              {location}
            </span>
          </h2>
          <div className=" gap-5   md:my-4 md:flex">
            <h2 className="  text-xl font-bold  text-[#131313CC] ">
              Area :
              <span className="  text-xl font-medium  text-[#131313CC]  ">
                {}
              </span>
            </h2>

            <h2
              className="text-xl font-bold
            "
            >
              Price:
              {averageCost}
            </h2>
          </div>

          <p className="my-2 text-center text-2xl  font-bold ">Facilities</p>
          <hr className="mb-2 border border-black" />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
