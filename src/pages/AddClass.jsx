// import React, { useState } from "react";

// const AddClass = () => {
//   const [className, setClassName] = useState("");
//   const [classImage, setClassImage] = useState("");
//   const [availableSeats, setAvailableSeats] = useState(0);
//   const [price, setPrice] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new class object with the form data
//     const newClass = {
//       name: className,
//       image: classImage,
//       instructorName: "John Doe", // Replace with the actual instructor name
//       instructorEmail: "john.doe@example.com", // Replace with the actual instructor email
//       availableSeats: availableSeats,
//       price: price,
//       status: "pending",
//     };

//     // Perform API call to add the class to the database
//     // ...

//     // Reset form fields
//     setClassName("");
//     setClassImage("");
//     setAvailableSeats(0);
//     setPrice(0);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="className">
//             Class Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="className"
//             type="text"
//             placeholder="Enter class name"
//             value={className}
//             onChange={(e) => setClassName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="classImage">
//             Class Image
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="classImage"
//             type="text"
//             placeholder="Enter class image URL"
//             value={classImage}
//             onChange={(e) => setClassImage(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="availableSeats">
//             Available Seats
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="availableSeats"
//             type="number"
//             placeholder="Enter available seats"
//             value={availableSeats}
//             onChange={(e) => setAvailableSeats(Number(e.target.value))}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="price">
//             Price
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="price"
//             type="number"
//             placeholder="Enter price"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-end">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit">
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddClass;




import { useState } from "react";

const AddClass = () => {
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

    // Perform an API call to add the class to the database
    // ...

    // Clear the form fields
    setClassName("");
    setClassImage("");
    setAvailableSeats(0);
    setPrice(0);
  };

  return (
    <div className="max-w-full min-h-screen mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
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
          <label htmlFor="classImage" className="block text-gray-700">
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;

