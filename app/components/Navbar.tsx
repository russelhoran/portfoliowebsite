import React from 'react'

const navItems = ['Home', 'About Me', 'Education', 'Projects', 'Career', 'Contact Me']

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex flex-wrap justify-center gap-6 text-white text-sm md:text-base">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={`#${item}`}
                className="px-3 py-2 transition-all duration-300 text-white hover:text-[#39FF14]"
              >
                {item}
              </a>
              <span
                className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#39FF14] transition-all duration-300 group-hover:w-full shadow-[0_0_5px_#39FF14]"
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar