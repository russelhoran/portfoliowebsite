import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="mt-24 px-4 md:px-12 lg:px-32 text-white" id="Contact Me">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">
        Contact Me
      </h2>

      <div className="bg-gray-900/40 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          I build <span className="text-[#39FF14] font-semibold">beautiful and responsive websites</span>, 
          full-stack <span className="text-[#39FF14] font-semibold">CRM</span> and <span className="text-[#39FF14] font-semibold">LMS</span> platforms, and <span className="text-[#39FF14] font-semibold">Static Websites </span>
        and <span className="text-[#39FF14] font-semibold">Landing Pages</span> with interactive forms or contact us form and can even <span className="text-[#39FF14] font-semibold">fix bugs or optimize existing systems</span>.
          <br />
          <br />
          <span className="text-[#39FF14]">Available</span> for freelance or project-based work.
        </p>

        <div className="space-y-4 text-gray-300 text-base">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#39FF14]" />
            <a href="mailto:russelfernandes35@gmail.com" className="hover:underline">
              russelfernandes35@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#39FF14]" />
            <a href="tel:8369358668" className="hover:underline">
              +91 83693 58668
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-[#39FF14]" />
            <a
              href="https://www.linkedin.com/in/russel-fernandes-6806651b3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/russel-fernandes-6806651b3
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-[#39FF14]" />
            <a
              href="https://github.com/russelhoran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/russelhoran
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact