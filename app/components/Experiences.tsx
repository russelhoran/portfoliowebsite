import React from 'react'
import Image from 'next/image' 

const Experiences = () => {
  return (
    <div className="mt-24 px-4 md:px-12 lg:px-32 text-white" id="Experience">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">
        Experience
      </h2>

      <div className="relative border-l-4 border-[#39FF14] pl-6 space-y-12">
        {/* Main Company */}
        <div className="relative">
          <div className="absolute -left-[28px] top-1 w-5 h-5 bg-[#39FF14] rounded-full shadow-[0_0_10px_#39FF14]" />
          
          <div className="flex items-center gap-4 mb-2">
            <img src="./brandbuddiezlogo.jpg" alt="Brandbuddiez Logo" className="w-12 h-12 object-contain rounded-full border border-[#39FF14]" />
            <div>
            <h3 className="text-4xl font-semibold text-[#39FF14]">Brandbuddiez Technologies Pvt. Ltd.</h3>
            <h2 className="text-2xl font-semibold text-[#39FF14]">Designation : Software Engineer (April 2024 - June 2025)</h2>
            </div>
          </div>

          <p className="text-gray-300 mb-3">
            Worked as part of a 3-developer team to revamp and build production-level platforms. Led transitions from legacy systems (Core PHP, MySQL)
            to modern stacks like <strong className="text-white">Next.js, Django, PostgreSQL, Tailwind, MUI</strong>, and built secure, SEO-friendly,
            server-rendered applications.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            <li>Built custom CRM features & manipulated complex data flows.</li>
            <li>Wrote backend automation scripts for internal tasks.</li>
            <li>Integrated payment gateways: Pinelab and Razorpay.</li>
            <li>Handled security using OAuth and token-based auth.</li>
          </ul>

          {/* Client Logos */}
          <div className="mt-4 flex gap-6 items-center">
            <img src="./haierlogo.png" alt="Haier" className="w-20 h-10 object-contain" />
            <img src="./godrejlogo.png" alt="Godrej Secure Solutions" className="w-20 h-10 object-contain" />
          </div>
        </div>

{/* company 2 */}
            <div className="relative">
          <div className="absolute -left-[28px] top-1 w-5 h-5 bg-[#39FF14] rounded-full shadow-[0_0_10px_#39FF14]" />
          
          <div className="flex items-center gap-4 mb-2">
            <img src="./nidologo.jpg" alt="Nido Automation Logo" className="w-12 h-12 object-contain rounded-full border border-[#39FF14]" />
            <div>
            <h3 className="text-2xl font-semibold text-[#39FF14]">Nido Automation And Machineries</h3>
            <h2 className="text-2xl font-semibold text-[#39FF14]">Designation : Node.js Intern (September 2023 - March 2024)</h2>
            </div>
          </div>

           <p className="text-sm text-gray-400 italic mb-2">Role: Node Developer (Intern)</p>

          <p className="text-gray-300 mb-3">
            Collaborated on Node.js-based software solutions for clients such as <strong className="text-white">Bluedart</strong> and <strong className="text-white">Delhivery</strong>.
            Developed robust APIs and validation logic to power automation systems.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            <li>Created and maintained REST APIs using <strong className="text-white">Express.js</strong>.</li>
            <li>Deployed applications to over 100+ production sites.</li>
            <li>Implemented hardware-level validations (weight, damage, PLC errors).</li>
            <li>Provided network troubleshooting & optimized device communication.</li>
            <li>Worked extensively in <strong className="text-white">Linux</strong> environments using <strong className="text-white">SSH</strong>.</li>
          </ul>

          <div className="mt-4 flex gap-6 items-center">
            <img src="./bluedartlogo.jpg" alt="Bluedart" className="w-20 h-10 object-contain" />
            <img src="./delhiverylogo.png" alt="Delhivery" className="w-20 h-15 object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Experiences