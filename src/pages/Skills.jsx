import React from 'react';
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import mysql from "../assets/mysql.png"
import mssql from "../assets/mssql.png"
import php from "../assets/php.png"
import seo from "../assets/seo.png"
import wordpress from "../assets/wordpress.png"

const Skills = () => {
 
  const skills = [
    { id: 1, title: "HTML", image: html },
    { id: 2, title: "CSS", image: css },
    { id: 3, title: "JavaScript", image: js },
    { id: 4, title: "React", image: react },
    { id: 5, title: "Tailwind", image: tailwind },
    { id: 6, title: "git", image: git },
    { id: 7, title: "github", image: github },
    { id: 8, title: "mysql", image: mysql },
    { id: 9, title: "ms sql", image: mssql },
    { id: 10, title: "php", image: php },
    { id: 11, title: "basic seo", image: seo },
    { id: 12, title: "wordpress", image: wordpress },
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
                data-aos-duration="500" className="text-sm overflow-hidden  uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
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