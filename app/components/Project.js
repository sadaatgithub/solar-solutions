import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Project = ({project}) => {
  return (
    <div  className="h-96 relative after:absolute after:inset-0 after:content-[''] group after:bg-gradient-to-b after:from-transparent  after:to-black/80 max-w-lg overflow-hidden cursor-pointer">
        <Image src={project.image} width={480} height={480} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"/>
        <div className="absolute bottom-0 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 z-10 left-0 right-0 transition-all flex flex-col gap-4 p-6  group-hover:translate-y-0 group-hover:transition-all
         group-hover:duration-500 group-hover:opacity-100 text-white">
            <p className="text-gray-100 uppercase text-xs tracking-widest">{project.category}</p>
           <h3 className=" font-bold text-3xl"> {project.text}</h3>
           <p className="text-2xl font-semibold">{project.capacity} KW</p>
           <button className="text-white"><FaChevronRight/></button>
        </div>
    </div>
  )
}

export default Project