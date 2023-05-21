import React from 'react'

const AboutStat = () => {
  return (
        <div className="flex w-full gap-6 py-20 px-20 ">
                <div className="flex gap-6 w-full ">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 class="text-5xl font-bold text-gray-700">$30M</h2>
                    <p className="text-orange-400">Customer Saving</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 class="text-5xl font-bold text-gray-700">10 M+</h2>
                    <p className="text-orange-400">Units Saved</p>
                    </div>


                </div>
                <div className="flex gap-6 w-full">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h2 class="text-5xl font-bold text-gray-700">80%</h2>
                    <p className="text-orange-400">Year On Year Growth</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full  items-center">
                        <h2 class="text-5xl font-bold text-gray-700">25+</h2>
                    <p className="text-orange-400">Clients</p>
                    </div>


                </div>
                

            </div>
  )
}

export default AboutStat