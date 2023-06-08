import React from 'react'
import TopSubHeading from '../common/heading/TopSubHeading'
import DivTitle from '../common/heading/DivTitle'

const ServiceHeader = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
        <TopSubHeading text="What We Offer"/>
        <div className="flex flex-col gap-6  items-center">
          <DivTitle text="Our Services"/>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            maiores.
          </p> */}
        </div>
      </div>
  )
}

export default ServiceHeader