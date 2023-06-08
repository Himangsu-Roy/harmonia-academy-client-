import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:828/1*zE2qnVTJehut7B8P2aMn3A.gif"
          alt="404 Not Found"
          className="w-80 mx-auto mb-8"
        />
        <h2 className="text-4xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="text-white bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
