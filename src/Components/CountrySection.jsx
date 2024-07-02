import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CountrySection = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://0124-dream-tourism-server-assignment-10-module-57.vercel.app/country")
      .then((res) => res.json())

      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold "
      >
        Discover the Wonders of Southeast Asia.
        <p className="mt-2 text-lg">
          Embark on an extraordinary adventure through the enchanting lands of
          Southeast Asia.
        </p>
      </h1>
      <div className="grid grid-cols-6 gap-6">
        {country.map((singleCountry) => (
          <NavLink
            data-aos="fade-up"
            data-aos-duration="1500"
            to={`/country/${singleCountry.countryName}`}
            className="col-span-6 md:col-span-3 lg:col-span-2 "
            key={singleCountry._id}
          >
            <div className="card flex h-full w-full border border-black bg-base-100 shadow-xl">
              <figure className="max-h-48   flex-grow">
                <img src={singleCountry.countryImageUrl} alt="" />
              </figure>
              <div className="card-body flex-grow-0 p-6">
                <h2 className="card-title text-3xl">
                  {singleCountry.countryName}
                </h2>
                <hr className="border-t border-dashed border-black" />
                <p>{singleCountry.countryDescription}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CountrySection;
