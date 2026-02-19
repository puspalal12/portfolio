import React from 'react'
// import blooddonate from '../assets/blooddonate.png';
// import todo from '../assets/todo.png';
// import kanban from '../assets/kanban.png';
// import istore from '../assets/istore.png';
// import movies from '../assets/movies.png';
// import invoice from '../assets/invoice.png';


const Projects = () => {
   const cardData = [
     {
       id: 1,
       title: "Blood-Donate Platform",
       description: "A React app to find or donate blood.",
       image: "/images/blooddonate.png",
       githubUrl: "https://github.com/puspalal12/blooddonate",
       liveUrl: "https://blooddonate-eight.vercel.app/",
       tag: "React.js"
     },
   
     {
       id: 2,
       title: "To-Do App",
       description: "A todo app in javascript.",
       image: "/images/todo.png",
       githubUrl: "https://github.com/puspalal12/js-projects/tree/main/todo",
       liveUrl: "https://js-projects-ruby-iota.vercel.app/",
       tag: "Javascript"
     },
     {
       id: 3,
       title: "Kanban Board",
       description: "Kanban Board to know the status of task.",
       image: "/images/kanban.png",
       githubUrl: "https://github.com/puspalal12/js-projects/tree/main/kanban",
       liveUrl: "https://js-projects-qjpa.vercel.app/",
       tag: "Javascript"
     },
     {
       id: 4,
       title: "I-Store Ecommerce",
       description: "E-Commerce app on React Js.",
       image: "/images/istore.png",
       githubUrl: "https://github.com/puspalal12/i-store",
       liveUrl: "https://i-store-ten.vercel.app/",
       tag: "ReactJs"
     }, 
     {
       id: 5,
       title: "Movies App",
       description: "Movies App to view rating using API.",
       image: "/images/movies.png",
       githubUrl: "https://github.com/puspalal12/js-projects/tree/main/moviesRating",
       liveUrl: "https://js-projects-ctph.vercel.app/",
       tag: "JavaScript"
     }, 
       {
       id: 6,
       title: "Invoice Generator",
       description: "Generate Invoice and download pdf.",
       image: "/images/invoice.png",
       githubUrl: "https://github.com/puspalal12/js-projects/tree/main/invoice",
       liveUrl: "https://js-projects-xof4.vercel.app/",
       tag: "JavaScript"
     },
     // ... duplicate for other projects
   ];

  return (
    <>
      <h1 data-aos="flip-down" data-aos-easing="linear"
        data-aos-duration="500" className='text-xl font-bold mb-10 text-center text-gray-800'>Projects</h1>
      <div>
        <div className="max-w-6xl mx-auto p-10">


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >

                <div data-aos="fade-right" data-aos-easing="linear"
                  data-aos-duration="500" className="relative h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="500" className="absolute top-3 right-3 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase rounded-md shadow-sm">
                    {project.tag}
                  </span>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear"
                  data-aos-duration="500" className="p-5 grow">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>


                <div data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="500" className="p-5 pt-0 flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects