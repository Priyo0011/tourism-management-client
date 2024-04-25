import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Nav from "../components/Nav";
import useAuth from "../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import toast,{ Toaster } from "react-hot-toast";


const Login = () => {
  const { signIn,setLoading, } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
    .then((result) => {
        console.log(result.user);
        setLoading(false);
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        toast.error(err.message);
      });
  };
  return (
    <div className="max-w-[1600px] mx-auto">
      <Nav></Nav>
      <div className="bg-base-200 md:p-24 mt-10">
        <h1 className="text-2xl font-bold text-center">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body md:w-3/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
              type={showPassword? "text":"password"}
              required
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"             
            />
            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword? <FaEye /> : <FaEyeSlash />
              }
            </span>
            </div>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover font-medium"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-800 text-white uppercase">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <Toaster/>
    </div>
  );
};

export default Login;
