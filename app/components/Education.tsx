import React from 'react'

const Education = () => {
  return (
    <div className="mt-10 px-4 md:px-12 lg:px-32 text-white" id="Education">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">Education</h2>

      <div className="flex flex-col gap-2 bg-gray-900/40 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        {/* College Name - Main Header */}
        <h3 className="text-2xl font-semibold text-[#39FF14]">
          St. Xavier's Institute Of Engineering
        </h3>

        {/* Degree - Subheader */}
        <h4 className="text-lg font-medium text-gray-300 italic">
          Bachelor's of Engineering in Information Technology (IT)
        </h4>

        {/* Dates */}
        <p className="text-sm text-gray-400 mb-1">Febuary 2020 – June 2023</p>

        {/* Description */}
        <p className="text-base text-gray-200">
         Secured a CGPA of <span className="text-white font-semibold">8.3</span>
        </p>
        <p className="text-base text-gray-200">
          Published paper on <span className="text-white font-semibold">Leaf Disease Detection Using Deep Learning</span>
        </p>

        {/* Paper Link */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1RfGL5TbhP44Bi355Lo2ZrZ4iO9UUZJaH/view?usp=sharing"
          className="mt-2 inline-block text-[#39FF14] hover:underline hover:text-white transition"
        >
          📄 View Research Paper
        </a>
      </div>
        <br/>
            <div className="flex flex-col gap-2 bg-gray-900/40 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
        {/* College Name - Main Header */}
        <h3 className="text-2xl font-semibold text-[#39FF14]">
          Thakur Polytechnic (Kandivali)
        </h3>

        {/* Degree - Subheader */}
        <h4 className="text-lg font-medium text-gray-300 italic">
         Diploma in Computer Engineering 
        </h4>

        {/* Dates */}
        <p className="text-sm text-gray-400 mb-1">Febuary 2018 – January 2020</p>

        {/* Description */}
        <p className="text-base text-gray-200">
          Secured a percentage of<span className="text-white font-semibold"> 77 </span>
        </p>
      </div>
    </div>
  )
}


export default Education