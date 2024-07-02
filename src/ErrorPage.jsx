import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center text-center"
    >

      <h1 className="text-5xl font-bold">Oops!</h1>
      <br />
      <p className="text-2xl">
        Sorry, Wrong Route Detected <br />
        <br />
        Please go to
        <Link className="btn-link" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;