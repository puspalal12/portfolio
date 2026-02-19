import React from 'react';
import { FaGraduationCap, FaSchool, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2018 - 2021",
      degree: "BSc.Computer Science and Information Technology",
      institution: "Farwestern University",
      description: "GPA:3.12",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      year: "2016 - 2018",
      degree: "Intermediate level",
      institution: "Radiant Higher Secondary School",
      description: "Division: 2nd",
      icon: <FaSchool />
    },
    {
      id: 3,
      year: "2018",
      degree: "SLC",
      institution: "Bright Star Boarding School",
      description: "Divison: 1st",
      icon: <FaCertificate />
    }
  ];

  return (

      <div className="max-w-6xl mx-auto p-10">
        <h1 data-aos="flip-down" data-aos-easing="linear"
        data-aos-duration="500" className='text-xl font-bold mb-10 text-center text-gray-800'>
          Education
        </h1>

        <div  className="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          
          {educationData.map((item, index) => (
            <div key={item.id} className="mb-12 relative flex items-center">
              

              <div className="absolute -left-[17px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white shadow-lg z-10">
                {item.icon}
              </div>


              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:flex-row-reverse' : 'md:pl-12 md:mr-auto'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span data-aos="flip-right" data-aos-easing="linear" data-aos-duration="500"  className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full">
                    {item.year}
                  </span>
                  <h3 data-aos="flip-left" data-aos-easing="linear" data-aos-duration="500" className="text-xl text-slate-800">
                    {item.degree}
                  </h3>
                  <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" className="text-blue-500 font-medium mb-2">
                    {item.institution}
                  </p>
                  <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
          
        </div>
      </div>

  );
};

export default Education;