"use client"
import React from 'react'
import { usePathname } from "next/navigation";

const PagePathBanner = () => {
  const path = usePathname()
  const currentPath = path.split("/")
  return (
    <div className="mt-20 md:mt-0 h-32 md:h-64  w-full flex items-center justify-center text-5xl bg-[url('../public/solarimg.jpg')] bg-cover font-bold bg-center relative after:content-[''] after:absolute after:bg-sky-900/80  after:inset-0">
        <h3 className="z-10 text-white capitalize self-center">{currentPath[1]}</h3></div>
  )
}

export default PagePathBanner