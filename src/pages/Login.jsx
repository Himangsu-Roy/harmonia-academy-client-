import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import { saveUser } from "../api/users";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Perform login action
    console.log("Form submitted:", data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });

    reset();
  };

  const handleGoogleLogin = () => {
    // Handle Google login action
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // save user to db
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className={`w-full border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
            type="email"
            id="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required.</p>
          )}
        </div>
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              className={`w-full border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:border-blue-500  ${
                errors.password ? "ring-2 ring-red-500" : ""
              }`}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={handleTogglePassword}>
              {showPassword ? (
                <MdOutlineVisibilityOff />
              ) : (
                <MdOutlineVisibility />
              )}
            </span>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit">
          Login
        </button>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg flex items-center hover:bg-gray-100 focus:outline-none focus:border-blue-500"
            onClick={handleGoogleLogin}>
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Google logo */}
            </svg>
            Login with Google
          </button>
        </div>

        <p className="text-center text-gray-700 mt-4 text-sm">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/registration">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
