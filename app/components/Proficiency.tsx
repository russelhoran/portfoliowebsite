'use client'
import * as React from "react"

// Neon-styled progress bar component
const NeonProgress = ({ label, percent, delay }: { label: string; percent: number; delay: number }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), delay)
    return () => clearTimeout(timer)
  }, [delay, percent])

  return (
    <div className="my-6">
        {progress === null ? (
            <>
              <div className="w-full h-4 bg-gray-700 animate-pulse rounded-full" />
      </>
    ) :(
<>
 <div className="flex justify-between items-center mb-1">
        <span className="text-white text-sm md:text-base">{label}</span>
        <span className="text-white text-sm md:text-base">{progress}%</span>
      </div>
      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full transition-all duration-1000 ease-in-out bg-[#39FF14] shadow-[0_0_10px_#39FF14,0_0_20px_#39FF14]"
          style={{ width: `${progress}%` }}
        />
      </div>
      </>
    )}
    </div>
  )
}

export const Proficiency = () => {
  return (
    <div className="mt-24 px-4 md:px-12 lg:px-32" id="proficiency">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proficiency</h2>
      <div className="grid grid-cols-1 gap-6">
        <NeonProgress label="Frontend Development" percent={90} delay={500} />
        <NeonProgress label="Backend Development" percent={80} delay={800} />
        <NeonProgress label="Programming" percent={70} delay={1100} />
      </div>
          <hr  className="mt-15"/>
    </div>
  )
}
