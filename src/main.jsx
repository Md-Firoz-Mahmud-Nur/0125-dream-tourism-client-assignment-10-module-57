import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllTouristSpot from "./Components/AllTouristSpot";
import AddTouristSpot from "./Components/AddTouristSpot";
import MyList from "./Components/MyList";
import AuthProvider from "./AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "./Components/ViewDetails";
import UpdateTouristSpot from "./Components/UpdateTouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/touristSpot"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:3000/touristSpot"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>,
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/touristSpot"),
      },
      {
        path: "/touristSpot/:id",
        element: <UpdateTouristSpot></UpdateTouristSpot>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/touristSpot/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
