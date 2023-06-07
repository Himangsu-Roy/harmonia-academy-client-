import React from "react";

const PopularInstructorsSection = () => {
  // Dummy data for popular instructors (replace with actual data)
  const popularInstructors = [
    {
      id: 1,
      name: "John Smith",
      imageUrl: "https://example.com/john-smith.jpg",
      students: 154,
    },
    {
      id: 2,
      name: "Emma Johnson",
      imageUrl: "https://example.com/emma-johnson.jpg",
      students: 132,
    },
    // Add more popular instructors here...
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularInstructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={instructor.imageUrl}
                alt={instructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {instructor.students} students
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructorsSection;
