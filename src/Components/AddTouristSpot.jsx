import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import { Helmet } from "react-helmet-async";


const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  const handleAddTouristSpot = (e) => {
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
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const shortDescription = form.shortDescription.value;

    const addTouristSpotData = {
      spotName,
      countryName,
      imageUrl,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userName,
      userEmail,
      shortDescription,
    };

    // send data to the server
    fetch(
      "https://0124-dream-tourism-server-assignment-10-module-57.vercel.app/touristSpot",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addTouristSpotData),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: " Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Tourist Spot</title>
      </Helmet>
      <div className=" container mx-auto mt-10 rounded-2xl ">
        <h2 className="text-center   text-4xl font-bold">Add Tourist Spot</h2>

        <form className="mt-10" onSubmit={handleAddTouristSpot}>
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
                  placeholder="Enter Tourist Spot Name"
                  required
                />
              </label>
            </div>
            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="countryName"
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
                  placeholder="Enter Total Visitors Count"
                  required
                />
              </label>
            </div>
            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text ">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="userName"
                  defaultValue={user.displayName}
                  placeholder="Enter Your Name"
                  required
                />
              </label>
            </div>
            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text ">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  className="input input-bordered w-full"
                  name="userEmail"
                  defaultValue={user.email}
                  placeholder="Enter Your Email"
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
                  placeholder="Describe It"
                  required
                />
              </label>
            </div>
            <button className="btn btn-outline col-span-2">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTouristSpot;
