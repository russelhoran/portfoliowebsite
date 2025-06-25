import React from 'react'

const AboutMe = () => {
  return (
    <div className="mt-10 px-4 md:px-12 lg:px-32 text-white" id="About Me">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gray-900/40 p-6 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="./russel.jpeg"
            alt="Russel's Profile"
            className="w-50 h-50 md:w-48 md:h-50 rounded-full border-4 border-[#39FF14] shadow-[0_0_20px_#39FF14]"
          />
        </div>

        {/* Description Section */}
        <div className="text-center md:text-left text-base md:text-lg text-gray-300 leading-relaxed">
          <p>
          Passionate and detail-oriented Software Developer with 1.3 years of hands-on experience in backend and frontend development. Proficient in building scalable web applications using technologies like Node.js, Express.js, Django, PHP (Laravel), and modern frontend frameworks including React.js and Next.js. Skilled in working with relational and non-relational databases such as PostgreSQL, MySQL, and MongoDB.Eager to contribute to dynamic development teams and take on challenging projects that drive innovation and growth.I'm a passionate software developer with a strong interest in frontend and backend technologies.I love solving real-world problems through clean, maintainable code. My focus is on building, responsive, scalable, and accessible web apps with a touch of creativity.
          </p>
        </div>
      </div>
    </div>
  )
}


export default AboutMe