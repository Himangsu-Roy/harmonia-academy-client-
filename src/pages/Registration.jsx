import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { saveUser } from "../api/users";
import { toast } from "react-hot-toast";

const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
    const [error, setError] = useState("");

  //? Navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    // Submit the form or perform further actions
    console.log("Form submitted:", data);

    createUser(data.email, data.password)
      .then((result) => {
        // const createdUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            saveUser(result.user)
            toast.success("Registration Successful");
            navigate(from, { replace: true });
            console.log("User Profile Updated");
          })
          .catch((error) => {
            console.log("Error updating profile: ", error);
            setError(error.message);

          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message)
      });

    setError("")
    reset();
  };

  const handleGoogleLogin = () => {
    // Handle Google login action
    signInWithGoogle().then((result) => {
      const user = result.user;
      toast.success("Successful Login");
      saveUser(user)
      if (user) {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Registration</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <p className="text-red-600 mb-5">{error}</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className={`w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "ring-2 ring-red-500" : ""
            }`}
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className={`w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*\W)/,
            })}
            className={`w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "ring-2 ring-red-500" : ""
            }`}
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              Password must be at least 6 characters long and contain at least
              one capital letter and special character.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password.current || "Passwords do not match.",
            })}
            className={`w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? "ring-2 ring-red-500" : ""
            }`}
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              Please confirm your password.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photoURL">
            Photo URL
          </label>
          <input
            {...register("photoURL")}
            className={`w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.photoURL ? "ring-2 ring-red-500" : ""
            }`}
            type="text"
            id="photoURL"
            placeholder="Enter the URL of your photo"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit">
          Register
        </button>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex justify-center" onClick={handleGoogleLogin}>
          <div className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg flex items-center hover:bg-gray-100 focus:outline-none focus:border-blue-500 cursor-pointer">
            <img
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              className="w-7"
            />
            <div className="text-gray-700 font-bold px-4 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {/* Google logo */}
              </svg>
              Login with Google
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-700 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700  hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
