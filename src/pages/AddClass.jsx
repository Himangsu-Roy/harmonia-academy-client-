import { useContext, useState } from "react";
import { imageUpload } from "../api/utils";
import { AuthContext } from "../providers/AuthProvider";
import { addClass } from "../api/class";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleAddClass = (e) => {
    e.preventDefault();

    imageUpload(classImage).then((data) => {
      // Create a new class object with the form data
      const newClass = {
        className,
        classImage: data.data.display_url,
        instructorName: user?.displayName, 
        instructorEmail: user?.email, 
        availableSeats,
        price,
        status: "pending",
      };

      console.log(newClass);

      // Perform an API call to add the class to the database
      addClass(newClass)
      .then(data => {
        console.log(data)
        if(data.insertedId) {
            toast.success("Class Added")
            navigate("/dashboard/myclasses");
        }
      })
      .catch(err => console.log(err.message))
    });
    

    // Clear the form fields
    setClassName("");
    setClassImage("");
    setAvailableSeats(0);
    setPrice(0);
  };

  const handleClassImageChange = (e) => {
    setClassImage(e.target.files[0]);
  };

  return (
    <div className="max-w-full min-h-screen mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Add a Class</h2>
      <form onSubmit={handleAddClass} className="text-black">
        <div className="mb-4">
          <label htmlFor="className" className="block text-gray-700">
            Class Name
          </label>
          <input
            required
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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
              accept="image/*"
              onChange={handleClassImageChange}
              className="hidden"
              required
            />
            <input type="file" className="file-input w-full max-w-xs hidden" />
          </label>
          {classImage && (
            <p className="mt-2 text-sm text-gray-500">{classImage.name}</p>
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
            id="availableSeats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            required
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;


