import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Registration = () => {
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
    reset();
  };

    const handleGoogleLogin = () => {
      // Handle Google login action
    };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Registration</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
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

        <div className="flex items-center justify-center mt-4">
          <button
            className="flex items-center bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-md shadow-sm"
            onClick={handleGoogleLogin}>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Google logo */}
            </svg>
            Login with Google
          </button>
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





