import { useEffect } from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const { updatedUser, setUpdatedUser } = useState(user);

  const [myEmailSpot, setMyEmailSpot] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myTouristSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEmailSpot(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
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
          `http://localhost:3000/myTouristSpot/${_id}`,
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
            console.log(data);
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



                  <button
                    onClick={() => handleDelete(singleMyEmailSpot._id)}
                    className="btn btn-outline  text-xl "
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
