import { useEffect } from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);

  const [myEmailSpot, setMyEmailSpot] = useState([]);
  console.log(myEmailSpot);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:3000/myTouristSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEmailSpot(data);
      });
  }, [user]);
  return (
    <div className='"border-solid container mx-auto my-10 rounded-xl border border-black '>
      <div className="overflow-x-auto    ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl  ">
              <th>Spot Name</th>
              <th>Country Name</th>
              <th>Cost</th>
              <th>Time</th>
              <th>Updated or Delete</th>
            </tr>
          </thead>

          <tbody>
            {myEmailSpot?.map((singleMyEmailSpot) => (
              <tr key={singleMyEmailSpot._id} className="font-medium">
                <td> {singleMyEmailSpot.spotName} </td>
                <td>{singleMyEmailSpot.countryName}</td>
                <td>{singleMyEmailSpot.averageCost} $ </td>
                <td>{singleMyEmailSpot.travelTime} - Days</td>
                <td className="flex flex-col gap-3 md:flex-row ">
                  <button className=" btn btn-outline  text-xl ">Update</button>
                  <button className="btn btn-outline  text-xl ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
