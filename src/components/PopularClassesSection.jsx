import React from "react";

const PopularClassesSection = () => {
  // Dummy data for popular classes (replace with actual data)
  const popularClasses = [
    {
      id: 1,
      title: "Music Theory 101",
      imageUrl: "https://example.com/music-theory.jpg",
      students: 123,
    },
    {
      id: 2,
      title: "Guitar Masterclass",
      imageUrl: "https://example.com/guitar-masterclass.jpg",
      students: 98,
    },
    // Add more popular classes here...
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={cls.imageUrl}
                alt={cls.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {cls.title}
                </h3>
                <p className="text-gray-600 mt-2">{cls.students} students</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClassesSection;
