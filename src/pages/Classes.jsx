import React, { useEffect, useState } from "react";
import { getAllClasses, getClass, selectClass } from "../api/class";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";

const Classes = ({ loggedIn, isAdmin }) => {
  const { user, role } = useAuth();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllClasses().then((data) => {
      console.log(data);
      setClasses(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(classes);

  const handleSelectClass = (className, classId) => {
    if (!user) {
      toast.error("Please log in before selecting the course.");
      return;
    }

    if (role === "admin") {
      toast.error("As an admin you cannot select a class.");
      return;
    }

    if (role === "instructor") {
      toast.error("As an instructor you cannot select a class.");
      return;
    }

    // get class by id
    getClass(classId).then((data) => {
      console.log(data);

      data.map((item) => {
        // setItems(item)
        const {
          className,
          classImage,
          instructorName,
          instructorEmail,
          availableSeats,
          price,
        } = item;
        const selectData = {
          className,
          classImage,
          instructorName,
          instructorEmail,
          availableSeats,
          price,
        };
        selectClass({ ...selectData, email: user?.email }).then((data) => {
          data.error
            ? toast.error("Class Already exist")
            : toast.success(`You have selected the class successful added`);
          // console.log(data.acknowledged);
        });
      });
    });

  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((cls, index) => (
          <div
            key={index}
            className={` rounded-lg overflow-hidden shadow-md ${
              cls.availableSeats === 0 ? "bg-red-400" : "bg-white"
            }`}>
            <img
              className="w-full h-48 object-cover"
              src={cls.classImage}
              alt={cls.className}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cls.className}
              </h3>
              <p className="text-gray-600">Instructor: {cls.instructorName}</p>
              <p className="text-gray-600">
                Available Seats: {cls.availableSeats}
              </p>
              <p className="text-gray-600">Price: ${cls.price}</p>
              <button
                className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${
                  !user ||
                  role === "admin" ||
                  role === "instructor" ||
                  cls.availableSeats === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleSelectClass(cls.className, cls._id)}
                disabled={
                  !user ||
                  role === "admin" ||
                  role === "instructor" ||
                  cls.availableSeats === 0
                }>
                {user ? "Select" : "Log in to Select"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
