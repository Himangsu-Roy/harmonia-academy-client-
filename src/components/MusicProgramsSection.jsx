import React from 'react';

const MusicProgramsSection = () => {
  const musicPrograms = [
    {
      title: 'Piano Lessons',
      description: 'Learn to play the piano with our experienced instructors. From beginner to advanced levels, we offer comprehensive lessons tailored to individual learning goals.',
      image: '/images/piano-lessons.jpg',
    },
    {
      title: 'Guitar Lessons',
      description: 'Discover the joy of playing the guitar. Our guitar lessons cover various styles, techniques, and genres, accommodating both acoustic and electric guitar enthusiasts.',
      image: '/images/guitar-lessons.jpg',
    },
    {
      title: 'Vocal Training',
      description: 'Develop your singing skills and explore your voice\'s full potential through our vocal training program. Our vocal instructors provide personalized guidance for all levels.',
      image: '/images/vocal-training.jpg',
    },
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Music Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {musicPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-48 object-cover" src={program.image} alt={program.title} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicProgramsSection;
