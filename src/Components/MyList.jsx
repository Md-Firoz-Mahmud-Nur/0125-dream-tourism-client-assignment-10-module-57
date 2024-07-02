import { useEffect } from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const { updatedUser, setUpdatedUser } = useState(user);

  const [myEmailSpot, setMyEmailSpot] = useState([]);
  useEffect(() => {
    fetch(
      `https://0124-dream-tourism-server-assignment-10-module-57.vercel.app/myTouristSpot/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEmailSpot(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://0124-dream-tourism-server-assignment-10-module-57.vercel.app/myTouristSpot/${_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = user.filter((cof) => cof._id !== _id);
              setUpdatedUser(remaining);
            }
          });
      }
    });
  };

  return (
    <div className='"border-solid container mx-auto my-10 rounded-xl border border-black '>
      <Helmet>
        <title>My List</title>
      </Helmet>
      <div className="overflow-x-auto    ">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="border-black text-lg md:text-2xl ">
              <th className="pl-2 pr-0 ">Spot</th>
              <th className="pl-2 pr-0">Country</th>
              <th className="pl-2 pr-0 text-lg">Cost</th>
              <th className="px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {myEmailSpot?.map((singleMyEmailSpot) => (
              <tr
                key={singleMyEmailSpot._id}
                className="border-base-300 font-medium"
              >
                <td className="pl-2 pr-0 text-lg md:text-xl">
                  {" "}
                  {singleMyEmailSpot.spotName}{" "}
                </td>
                <td className=" pl-2 pr-0">{singleMyEmailSpot.countryName}</td>
                <td className="pl-2 pr-0 text-lg">
                  {singleMyEmailSpot.averageCost} ${" "}
                </td>
                <td className="flex flex-col justify-center gap-3 px-2 md:flex-row">
                  <Link
                    className=" btn btn-outline p-1 text-base md:px-4  md:text-xl"
                    to={`/touristSpot/${singleMyEmailSpot._id}`}
                  >
                    <button>Update</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(singleMyEmailSpot._id)}
                    className="btn btn-outline p-1  text-base md:px-4 md:text-xl "
                  >
                    Delete
                  </button>
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
