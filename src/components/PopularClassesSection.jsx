import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { ThemeContext } from "../providers/ThemeProvider";
import "../styles/theme.css"

const PopularClassesSection = () => {
  const {theme} = useContext(ThemeContext) ;
 
  const [popularClass, setPopularClass] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/popular-classes").then((data) => {
      setEnrolledStudents(data.data);
    });
  }, []);

  // get popular cls
  useEffect(() => {
    axiosSecure.get("/classfind").then((data) => {
      setPopularClass(data.data);
    });
  }, []);

 

  const findPopularCls = popularClass.filter((popCls) => {
    return enrolledStudents.some(
      (findPopCls) => findPopCls._id === popCls.className
    );
  });
  console.log(findPopularCls);

  const topClasses = enrolledStudents.map((obj, index) => {
    return Object.assign({}, obj, findPopularCls[index]);
  });

  console.log(topClasses)
 console.log(theme)

  return (
    <section className={`${theme === "light" ? "light-theme": "dark-theme"} py-8`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topClasses.map((classItem) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              key={classItem._id}>
              <img
                src={classItem.classImage}
                alt={classItem.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {classItem.className}
                </h3>
                <p className="text-gray-600 mb-4">
                  {classItem.count} students
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClassesSection;
