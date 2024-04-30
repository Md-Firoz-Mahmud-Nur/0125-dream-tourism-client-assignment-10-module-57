import { useLoaderData } from "react-router-dom";

const UpdateTouristSpot = () => {
  const updateTouristSpot = useLoaderData();
  const {
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
      <h2 className="text-center   text-4xl font-bold">Update Tourist Spot</h2>

      <form className="mt-10">
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
              <input
                type="text"
                className="input input-bordered w-full"
                name="countryName"
                defaultValue={countryName}
                placeholder="Enter Country Name"
                required
              />
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
