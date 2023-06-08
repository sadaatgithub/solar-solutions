"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { motion,AnimatePresence } from 'framer-motion'
import Container from '@/app/components/Container'
import config from "../../../app/index.json"

const Projects = () => {
    const projects = config.projects
    const [filteredData,setFilterData] = useState(projects)
    const [activeCategory, setActiveCategory] = useState("All")
    const category = [...new Set(projects.map(project => project.category))]

    const setCategory = (category) =>{
        if(category === "All"){
          setFilterData(projects)
          setActiveCategory("All")
        } else{
        setFilterData(projects.filter(project => project.category == category))
        setActiveCategory(category)
      
      }
      
      
      }
  return (
    <Container className="flex flex-col gap-y-10 ">
    <div className=" flex-col gap-6 items-center hidden">
        <h2 className="text-4xl font-bold text-sky-800">
            Projects</h2>
            <p>Helping you save energy and keep the lights on</p>
    </div>    
    <div className="flex gap-4 justify-center text-sm ">
        <button onClick={()=> setCategory("All")} className={`${activeCategory == "All"? "border-b-2 border-orange-400 text-gray-700":"border-b-2 border-b-transparent text-gray-400" }  py-1  uppercase`}>All</button>
    {category.map((category) => (<button key={category} onClick={()=> setCategory(category)} className={`${activeCategory===category? "border-b-2 border-orange-400 text-gray-700":"border-b-2 border-b-transparent text-gray-400"} py-1 uppercase `}>{category}</button>))}
            </div>    
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 place-items-center mt-10">
               <AnimatePresence>
                {filteredData.map(project =>
                <motion.div layout animate={{opacity:1,scale:1}} initial={{opacity:0,scale:0}} exit={{opacity:0,scale:0}} key={project.id} className="h-96 relative after:absolute after:inset-0 after:content-[''] group after:bg-gradient-to-b after:from-transparent  after:to-black/60 max-w-lg overflow-hidden cursor-pointer">
                    <Image src={project.image} width={480} height={480} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 translate-y-8 opacity-0 z-10 left-0 right-0 transition-all flex flex-col gap-4 p-6  group-hover:translate-y-0 group-hover:transition-all
                     group-hover:duration-500 group-hover:opacity-100">
                        <p className="text-gray-100 uppercase text-xs tracking-widest">{project.category}</p>
                       <h3 className="text-white font-bold text-3xl"> {project.text}</h3>
                       <button className="text-white"><FaChevronRight/></button>
                    </div>
                </motion.div>)}
                </AnimatePresence>
            </motion.div>
    </Container>
  )
}

export default Projects