import React from 'react'
import {TbLoaderQuarter} from "react-icons/tb"

const Loading = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <TbLoaderQuarter className="text-6xl text-orange-500 animate-spin"/>
      </div>
  )
}

export default Loading