import React from 'react'
import config from "../../../app/index.json"
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

const RecentProject = () => {
    const projects = config.projects
  return (
    <div className="flex flex-col gap-20 py-20">
        <div className="flex flex-col gap-4 px-20">
            <p className="text-orange-500 uppercase font-semibold">What we Do</p>
            <h2 className="text-5xl font-bold text-gray-700 capitalize">Recent Projects</h2>
        </div>

<div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 place-items-center">
    {projects.slice(0,4).map(project => 
        <div layout animate={{opacity:1,scale:1}} initial={{opacity:0,scale:0}} exit={{opacity:0,scale:0}} key={project.id} className="h-96 relative after:absolute after:inset-0 after:content-[''] group after:bg-gradient-to-b after:from-transparent  after:to-black/60 max-w-lg overflow-hidden cursor-pointer">
        <Image src={project.image} width={480} height={480} alt="" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 z-10 left-0 right-0 transition-all flex flex-col gap-4 p-6  group-hover:translate-y-0 group-hover:transition-all
         group-hover:duration-500 group-hover:opacity-100">
            <p className="text-gray-100 uppercase text-xs tracking-widest">{project.category}</p>
           <h3 className="text-white font-bold text-3xl"> {project.text}</h3>
           <button className="text-white"><FaChevronRight/></button>
        </div>
    </div>)}
</div>
    </div>
  )
}

export default RecentProject