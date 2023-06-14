import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { ThemeContext } from "../providers/ThemeProvider";


const PopularInstructorsSection = () => {
const [popularInatructor, setPopularInatructor] = useState([]);
const [enrolledStudents, setEnrolledStudents] = useState([]);
const [users, setUsers] = useState([]);
const [axiosSecure] = useAxiosSecure();
const {theme} = useContext(ThemeContext)

useEffect(() => {
  axiosSecure.get("/popular-instructor").then((data) => {
    setEnrolledStudents(data.data);
  });
}, []);

// get popular cls
useEffect(() => {
  axiosSecure.get("/instructorfind").then((data) => {
    setPopularInatructor(data.data);
  });
}, []);


// 
useEffect(() => {
  axiosSecure.get("/user").then((data) => {
    setUsers(data.data);
    console.log(data.data);
  });
}, []);


// find popular instructor
const findPopularInstructor = popularInatructor.filter((popInstructor) => {
  return enrolledStudents.some(
    (findPopInstructor) =>
      findPopInstructor._id === popInstructor.instructorName
  );
});
console.log(findPopularInstructor);


// an array object assign in another array object
const topInstructors = enrolledStudents.map((obj, index) => {
  return Object.assign({}, obj, findPopularInstructor[index]);
});


// 
const findPopularInstructorEmail = topInstructors.filter((popInstructorEmail) => {
  return enrolledStudents.some(
    (findPopInstructorEmail) =>
      findPopInstructorEmail.email === popInstructorEmail.email
  );
});
console.log(findPopularInstructor);


// an array object assign in another array object
const topInstructorsEmail = users.map((obj, index) => {
  return Object.assign({}, obj, findPopularInstructorEmail[index]);
});



  return (
    <section
      className={`${theme === "light" ? "light-theme" : "dark-theme"} py-8`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topInstructorsEmail.map((instructor) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              key={instructor._id}>
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-gray-600 mb-4">
                  {instructor.count} students
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructorsSection;
