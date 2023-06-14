import { useState } from "react";
import { imageUpload } from "../api/utils";
import { updateClass } from "../api/class";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UpdateClass = () => {
  // const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState();
  
  // const [availableSeats, setAvailableSeats] = useState(0);
  const navigate = useNavigate();
  const updateData = useLoaderData();
  const { user } = useAuth();
  const [classData] = updateData;
  const [getId, setGetId] = useState("");
const [image, setImage] = useState(null);
console.log(image);
  const [updateClassData, setUpdateClassData] = useState({
    className: classData?.className,
    classImage: classData?.classImage,
    instructorName: user?.displayName, // Replace with the actual instructor name (use the displayName value of logged in user/instructor)
    instructorEmail: user?.email, // Replace with the actual instructor email (use the email value of logged in user/instructor)
    availableSeats: classData?.availableSeats,
    price: classData?.price,
  });
 
console.log(updateClassData.classImage);

console.log(classImage)

  const handleAddClass = (e) => {
    e.preventDefault();

    imageUpload(image).then((data) => {
      console.log(data?.data?.display_url);
      setClassImage(data?.data?.display_url);
      updateClass(updateClassData, getId)
        .then((data) => {
          console.log(data);
          if (data.upsertedCount > 0 || data.matchedCount > 0) {
            toast.success("Updated a Class");
            // navigate("/dashboard/myclasses");
          }
        })
        .catch((err) => console.log(err.message));
    });

    // Clear the form fields
    // setClassName("");
    // setClassImage("");
    // setAvailableSeats(0);
    // setPrice(0);
  };

    const handleInputChange = (e) => {
      setUpdateClassData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        // [e.target.name]: e.target.files[0],
      }));
    };

  const handleGetId = (id) => {
    setGetId(id);
  };

  const handleClassImageChange = (e) => {
    setImage(e.target.files[0]);
    setUpdateClassData((prevData) => ({
      ...prevData,
       classImage,
    }));
  };

  return (
    <div className="max-w-full min-h-screen mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Update a Class</h2>
      <form onSubmit={handleAddClass} className="text-black">
        <div className="mb-4">
          <label htmlFor="className" className="block text-gray-700">
            Class Name
          </label>
          <input
            required
            type="text"
            name="className"
            id="className"
            value={updateClassData.className}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="classImage" className="block text-gray-700 mb-1">
            Class Image
          </label>
          <label
            htmlFor="classImage"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
            Upload Image
            <input
              type="file"
              id="classImage"
              name="classImage"
              accept="image/*"
              onChange={handleClassImageChange}
              className="hidden"
            />
            <input type="file" className="file-input w-full max-w-xs hidden" />
          </label>
          {image && (
            <p className="mt-2 text-sm text-gray-500">
              {image.name}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700">Instructor Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700">Instructor Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block text-gray-700">
            Available Seats
          </label>
          <input
            required
            type="number"
            name="availableSeats"
            id="availableSeats"
            value={updateClassData.availableSeats}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            required
            type="text"
            name="price"
            id="price"
            value={updateClassData.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => handleGetId(classData?._id)}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;


