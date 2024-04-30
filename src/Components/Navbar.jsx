import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristSpot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/myList">My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar mt-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dream Tourism</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={
                user.displayName ? user.displayName : "user name not found"
              }
            >
              <div className="mr-2 size-10 rounded-full border border-black">
                <img className="rounded-full" alt="" src={user.photoURL} />
              </div>
            </div>
            <Link
              onClick={signOut}
              to="/"
              className="btn border border-black bg-transparent text-lg  hover:bg-gray-800 hover:text-white"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn border border-black bg-transparent  text-lg  hover:bg-gray-800 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn border border-black bg-transparent  text-lg  hover:bg-gray-800 hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
