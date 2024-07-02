import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {
  const handleUpdateTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const imageUrl = form.imageUrl.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const shortDescription = form.shortDescription.value;

    const updatedTouristSpot = {
      spotName,
      countryName,
      imageUrl,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      shortDescription,
    };
    console.log(updatedTouristSpot);
    //send data to the server
    fetch(
      `https://0124-dream-tourism-server-assignment-10-module-57.vercel.app/touristSpot/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTouristSpot),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Spot Updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  const updateTouristSpot = useLoaderData();
  const {
    _id,
    spotName,
    countryName,
    imageUrl,
    location,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    shortDescription,
  } = updateTouristSpot;

  console.log();
  return (
    <div className=" container mx-auto mt-10 rounded-2xl ">
      <Helmet>
        <title>
          Update Tourist Spot
        </title>
      </Helmet>
      <h2 className="text-center   text-4xl font-bold">Update Tourist Spot</h2>

      <form onSubmit={handleUpdateTouristSpot} className="mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="spotName"
                defaultValue={spotName}
                placeholder="Enter Tourist Spot Name"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Country Name</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full"
                name="countryName"
                defaultValue={countryName}
                required
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="imageUrl"
                defaultValue={imageUrl}
                placeholder="Enter Image URL"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="location"
                defaultValue={location}
                placeholder="Enter Location"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                className="input input-bordered w-full"
                name="averageCost"
                defaultValue={averageCost}
                placeholder="Enter Average Cost"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="seasonality"
                defaultValue={seasonality}
                placeholder="Summer / Spring / Winter / Rainy"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Travel Time</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                className="input input-bordered w-full"
                name="travelTime"
                defaultValue={travelTime}
                placeholder="3-Days / 7-Days / 15-Days"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Total Visitors Per Year</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                className="input input-bordered w-full"
                name="totalVisitorsPerYear"
                defaultValue={totalVisitorsPerYear}
                placeholder="Enter Total Visitors Count"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-2">
            <label className="label">
              <span className="label-text ">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="shortDescription"
                defaultValue={shortDescription}
                placeholder="Describe It"
                required
              />
            </label>
          </div>
          <button className="btn btn-outline col-span-2">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTouristSpot;
