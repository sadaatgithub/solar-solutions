"use client"
import { useParams } from 'next/navigation'
import React from 'react'


const Slug = () => {

    const {slug} = useParams()
  return (
    <div className="min-h-screen">{slug}</div>
  )
}

export default Slug