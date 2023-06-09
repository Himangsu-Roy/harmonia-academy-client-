// import { useState } from "react";

// const UpdateClass = () => {
//   const [className, setClassName] = useState("");
//   const [classImage, setClassImage] = useState("");
//   const [availableSeats, setAvailableSeats] = useState(0);
//   const [price, setPrice] = useState(0);

//   const handleAddClass = (e) => {
//     e.preventDefault();

//     // Create a new class object with the form data
//     const newClass = {
//       className,
//       classImage,
//       instructorName: "John Doe", // Replace with the actual instructor name (use the displayName value of logged in user/instructor)
//       instructorEmail: "john.doe@example.com", // Replace with the actual instructor email (use the email value of logged in user/instructor)
//       availableSeats,
//       price,
//       status: "pending",
//     };

//     // Perform an API call to add the class to the database
//     // ...

//     // Clear the form fields
//     setClassName("");
//     setClassImage("");
//     setAvailableSeats(0);
//     setPrice(0);
//   };

//   const handleClassImageChange = (e) => {
//     setClassImage(e.target.files[0]);
//   };

//   return (
//     <div className="max-w-full min-h-screen mx-auto bg-white shadow-lg p-6 rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
//       <form onSubmit={handleAddClass} className="text-black">
//         <div className="mb-4">
//           <label htmlFor="className" className="block text-gray-700">
//             Class Name
//           </label>
//           <input
//             type="text"
//             id="className"
//             value={className}
//             onChange={(e) => setClassName(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="classImage" className="block text-gray-700 mb-1">
//             Class Image
//           </label>
//           <label
//             htmlFor="classImage"
//             className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
//             Upload Image
//             <input
//               type="file"
//               id="classImage"
//               accept="image/*"
//               onChange={handleClassImageChange}
//               className="hidden"
//               required
//             />
//           </label>
//           {classImage && (
//             <p className="mt-2 text-sm text-gray-500">{classImage.name}</p>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row md:space-x-4">
//           <div className="mb-4 md:w-1/2">
//             <label className="block text-gray-700">Instructor Name</label>
//             <input
//               type="text"
//               value="John Doe"
//               readOnly
//               className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="mb-4 md:w-1/2">
//             <label className="block text-gray-700">Instructor Email</label>
//             <input
//               type="email"
//               value="john.doe@example.com"
//               readOnly
//               className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="availableSeats" className="block text-gray-700">
//             Available Seats
//           </label>
//           <input
//             type="number"
//             id="availableSeats"
//             value={availableSeats}
//             onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
//             className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-gray-700">
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(parseFloat(e.target.value))}
//             className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateClass;



import { useState } from "react";

const UpdateClass = () => {
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddClass = (e) => {
    e.preventDefault();

    // Create a new class object with the form data
    const newClass = {
      className,
      classImage,
      instructorName: "John Doe", // Replace with the actual instructor name (use the displayName value of logged in user/instructor)
      instructorEmail: "john.doe@example.com", // Replace with the actual instructor email (use the email value of logged in user/instructor)
      availableSeats,
      price,
      status: "pending",
    };

    // Perform an API call to update the class in the database
    // ...

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
      <h2 className="text-2xl font-bold mb-4 text-black">Update a Class</h2>
      <form onSubmit={handleAddClass} className="text-black">
        <div className="mb-4">
          <label htmlFor="className" className="block text-gray-700">
            Class Name
          </label>
          <input
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
              value="John Doe"
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700">Instructor Email</label>
            <input
              type="email"
              value="john.doe@example.com"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;