import Swal from "sweetalert2";

const AddTouristSpot = () => {
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

    console.log(
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
    );

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

    console.log(addTouristSpotData);

    // send data to the server
    fetch("http://localhost:5000/touristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTouristSpotData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: " Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
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
              <span className="label-text ">Country Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="countryName"
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
  );
};

export default AddTouristSpot;
