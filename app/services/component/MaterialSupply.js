import Container from '@/app/components/Container'
import Image from 'next/image'

import React from 'react'
const material = [
    {
        id:1,
        title:"Panels",
        img:"/adani_panel.webp",
        brand:"Adani", 
    },{
        id:2,
        title:"Solar BOS",
        img:"/solar_bos.jpg",   
    },
    {
        id:3,
        title:"Inverter",
        img:"/growatt_inverter.png",   
        brand:"Growatt",
    },
    {
        id:4,
        title:"ACDB",
        img:"/solar_acdb.jpg",   
    },
    {
        id:5,
        title:"DCDB",
        img:"/solar_dcdb.webp",   
    },
    {
        id:6,
        title:"Inverter",
        img:"/sungrow_inverter.png",  
        brand:"Sungrow", 
    },{
        id:7,
        title:"MC4",
        img:"/mc4.webp",   
    },{
        id:8,
        title:"Earthing & LA",
        img:"/earthing.webp",   
    },{
        id:9,
        title:"DC Cable",
        img:"/dc_cable.jpg",   
    },{
        id:10,
        title:"AC Cable",
        img:"/ac_canle.webp",   
    },{
        id:11,
        title:"AMC Panel",
        img:"/amc_panel.jpg",   
    },
    // {
    //     id:12,
    //     title:"",
    //     img:"",   

    // },{
    //     id:13,
    //     title:"",
    //     img:"",   
    // },
]


const MaterialSupply = () => {
  return (
   <Container className="min-h-screen flex flex-col gap-12 items-center">
    <h2 className="text-4xl font-bold">Solar Material Supply</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {material.map(material => (
            <div key={material.id} className="flex flex-col border rounded-sm overflow-hidden h-full shadow-md">
                <div className="w-full h-96  object-contain  relative">
                <Image src={material.img} width={640} height={480} alt="" className="object-cover w-auto h-auto"/>
                <div className="absolute bottom-0 left-0  bg-orange-400 px-2 py-1 text-white">{material.title}</div>
                </div>
            </div>
        ))}
    </div>
   </Container>
  )
}

export default MaterialSupply