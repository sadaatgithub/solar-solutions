import React from 'react'

const ServiceHeader = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
        <p className="font-semibold text-orange-500 uppercase">What We Offer</p>
        <div className="flex flex-col gap-6  items-center">
          <h2 className="text-5xl font-bold text-gray-700">Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            maiores.
          </p>
        </div>
      </div>
  )
}

export default ServiceHeader