import React from 'react'

const projects = [
  {
    title: 'Dough Delight – E-commerce Website',
    description: 'Designed and developed a responsive e-commerce website for a home-based donut business selling to a local Instagram community. The client provided a competitor reference (BomboloniBoss), and I created a visually similar, user-friendly site that matched their vision. The site includes order confirmation emails and has been well-received by the client and their customers.',
    technologies: ['Javascript', 'Python','React.js', 'Next.js','Django','Mysql','Tailwind CSS'],
  },
  {
    title: 'CRUD API Development using Node.js and Express.js',
    description: 'Designed and developed a simple CRUD (Create, Read, Update, Delete) API using Node.js and Express.js.Implemented the Model-View-Controller (MVC) architectural pattern to ensure a clear separation of concerns and maintainable codebase.Created and maintained an in-memory data storage system using arrays to store and manage the API data.Imported and utilized the UUID library to generate unique IDs for each data entry, ensuring data integrity and avoiding conflicts.Conducted thorough unit and integration testing using the Postman tool to validate the API functionality and ensure error-free responses.',
    technologies: ['Express.js', 'Node.js', 'Next.js'],
  },
  {
    title: 'Dough Delight – Custom CRM System',
    description: 'Developed a tailored CRM for Dough Delight to efficiently manage their e-commerce operations. The client can easily add, remove, and prioritize products, organize them into categories, set prices, and manage visibility with toggle controls. The order management module includes filters for date ranges and name-based search, helping the client track and process orders seamlessly. A financial dashboard provides insights into monthly, daily, and yearly order volumes and revenue. Additional features include customer account management with options to update user details or deactivate accounts, all presented with clean UI components, pagination, and a structured layout.',
    technologies: ['Next.js', 'Postgresql', 'Tailwind Css', 'MUI','Django'],
  },
]

const Projects = () => {
  return (
    <div className="mt-24 px-4 md:px-12 lg:px-32 text-white" id="Projects">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">
        Personal Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/40 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-[#39FF14] mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#39FF14]/10 text-[#39FF14] px-3 py-1 rounded-full border border-[#39FF14]/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects