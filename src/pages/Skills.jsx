import React from 'react';

const Skills = () => {
 
  const skills = [
    { id: 1, title: "HTML", image: "../assets/html.png" },
    { id: 2, title: "CSS", image: "../assets/css.png" },
    { id: 3, title: "JavaScript", image: "../assets/js.png" },
    { id: 4, title: "React", image: "../assets/react.png" },
    { id: 5, title: "Tailwind", image: "../assets/tailwind.png" },
    { id: 6, title: "git", image: "../assets/git.png" },
    { id: 7, title: "github", image: "../assets/github.png" },
    { id: 8, title: "mysql", image: "../assets/mysql.png" },
    { id: 9, title: "ms sql", image: "../assets/mssql.png" },
    { id: 10, title: "php", image: "../assets/php.png" },
    { id: 11, title: "basic seo", image: "../assets/seo.png" },
    { id: 12, title: "wordpress", image: "../assets/wordpress.png" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-13">
      <h1 data-aos="flip-down" data-aos-easing="linear"
        data-aos-duration="500" className='text-xl font-bold mb-10 text-center text-gray-800'>Skills</h1>
      <div className="max-w-6xl mx-auto p-6">
 
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
    
              <div data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="500" className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="max-w-full max-h-full object-contain"
                  
                  onError={(e) => (e.target.src = "https://via.placeholder.com/64?text=Icon")}
                />
              </div>

             
              <span data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="500" className="text-sm font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;