import React from 'react'

const Copyright = () => {
  return (
    <footer className="mt-16 py-4 text-center text-sm text-gray-400 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} Made with 💻 by{' '}
        <span className="text-[#39FF14] font-semibold hover:underline">
          Russel Fernandes
        </span>
      </p>
    </footer>
  )
}

export default Copyright