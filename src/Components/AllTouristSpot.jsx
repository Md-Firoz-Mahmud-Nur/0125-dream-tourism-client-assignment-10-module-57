import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import AllTouristSpotCard from "./AllTouristSpotCard";
import { useState } from "react";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  const [sortAllTouristSpot, setSortAllTouristSpot] = useState(allTouristSpot);
  const [loading, setLoading] = useState(false);
  const sortAllTouristSpotByCost = () => {
    setLoading(true);
    const sortedTouristSpot = [...sortAllTouristSpot].sort((a, b) => {
      return a.averageCost - b.averageCost;
    });
    setSortAllTouristSpot(sortedTouristSpot);
    setLoading(false);
  };

  return (
    <>

      <div className="container mx-auto my-10  ">
        {loading && (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
        <div className="dropdown dropdown-bottom mb-20 flex  justify-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline m-1 bg-transparent pr-0"
          >
            Sort By
            <RiArrowDropDownLine className="text-4xl " />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <button
                className="btn btn-outline"
                onClick={sortAllTouristSpotByCost}
              >
                Average Cost
              </button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-6 gap-6">
          {sortAllTouristSpot.map((touristSpot) => {
            return (
              <AllTouristSpotCard
                key={touristSpot._id}
                touristSpot={touristSpot}
              ></AllTouristSpotCard>
            );
          })}
        </div>
      </div>{" "}
    </>
  );
};

export default AllTouristSpot;
