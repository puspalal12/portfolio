import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

  const contactDetails = [
    {
      id: 1,
      icon: <FaEnvelope className="text-blue-600" />,
      label: "Email",
      value: "puspalalchaudhary86@gmail.com",
      link: "mailto:puspalalchaudhary86@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-green-600" />,
      label: "Phone",
      value: "+977 (980) 643-2104",
      link: "tel:+9779806432104",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-red-600" />,
      label: "Location",
      value: "Kathmandu, Nepal",
      link: "#",
    },
  ];

  return (

      <div className="max-w-6xl mx-auto p-10">
        <div className="text-center mb-16">
          <h2 data-aos="flip-down" data-aos-easing="linear"
        data-aos-duration="500" className='text-xl font-bold mb-10 text-center text-gray-800'>Get In Touch</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Feel free to send a message!
          </p>
        </div>

   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
         
          <div className="space-y-8">
            <h3 className="text-xl  text-slate-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <a 
                  key={detail.id} 
                  href={detail.link}
                  className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="text-lg p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    {detail.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs  text-slate-400 uppercase tracking-widest">{detail.label}</p>
                    <p className="text-lg text-slate-700">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>

           
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm  text-slate-700 mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm  text-slate-700 mb-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm  text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-blue-200">
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </div>

  );
};

export default Contact;