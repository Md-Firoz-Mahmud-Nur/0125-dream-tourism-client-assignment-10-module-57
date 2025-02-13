import { useContext } from "react";

import { FaGoogle, FaGithub } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login, googleLogin, gitHubLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        toast.success("Login successful. Please Wait for Redirect", {
          autoClose: 1500,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch(() => {
        toast.error("Login failed. Please check your Email and Password.");
      });
  };

  const HandleGoogle = () => {
    googleLogin().then(() => {
      toast.success("Login successful. Please Wait for Redirect", {
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1500);
    });
  };

  const HandleGitHub = () => {
    gitHubLogin().then(() => {
      toast.success("Login successful. Please Wait for Redirect", {
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1500);
    });
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero p-5 md:p-20 ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Securely access your account. Log in now for streamlined
              navigation and personalized services.
            </p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form onSubmit={HandleLogin} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="mt-4">
                    New to this website? Please{" "}
                    <Link className="btn-link" to="/register">
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-xl">Login</button>
              </div>
            </form>
            <p className="mb-2 text-center text-lg font-semibold">
              Or Login With!
            </p>
            <div className="mb-4 flex w-full flex-row justify-center">
              <button onClick={HandleGoogle} className="btn mr-4 ">
                <FaGoogle />
                Google
              </button>
              <button onClick={HandleGitHub} className="btn">
                <FaGithub></FaGithub>GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Login;
