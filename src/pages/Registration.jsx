import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Submit the form or perform further actions
    console.log("Form submitted:", data);
    reset()
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
            className={`w-full border ${
              errors.name ? "border-red-500" : "border-gray-400"
            } rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
            type="text"
            id="name"
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
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-400"
            } rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
            type="email"
            id="email"
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
            className={`w-full border ${
              errors.password ? "border-red-500" : "border-gray-400"
            } rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
            type="password"
            id="password"
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
            {...register("confirmPassword", { required: true })}
            className={`w-full border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-400"
            } rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
            type="password"
            id="confirmPassword"
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
            className={`w-full border ${
              errors.photoURL ? "border-red-500" : "border-gray-400"
            } rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
            type="text"
            id="photoURL"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>
          {/* Add social login buttons here */}
        </div>
      </form>
    </div>
  );
};

export default Registration;
