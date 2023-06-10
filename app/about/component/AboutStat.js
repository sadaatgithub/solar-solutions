import React from 'react'

const AboutStat = () => {
  return (
        <div className="flex flex-col md:flex-row w-full gap-6 py-20 md:px-20 px-4 ">
                <div className="flex gap-6 w-full ">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 className="text-5xl font-bold text-orange-500 drop-shadow-lg ">$30M</h2>
                    <p className="text-gray-500">Customer Saving</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 className="text-5xl font-bold text-orange-500 drop-shadow-lg ">10 M+</h2>
                    <p className="text-gray-500">Units Saved</p>
                    </div>
                </div>
                <div className="flex gap-6 w-full">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 className="text-5xl font-bold text-orange-500 drop-shadow-lg">80%</h2>
                    <p className="text-gray-500">Year On Year Growth</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full  items-center">
                        <h2 className="text-5xl font-bold text-orange-500 drop-shadow-lg">25+</h2>
                    <p className="text-gray-500">Clients</p>
                    </div>


                </div>
                

            </div>
  )
}

export default AboutStat