import React from 'react'

const DottedAbstract = ({className}) => {
  return (
    <div className={`${className || " "} absolute  bg-[url('../public/dotted-vector.svg')] w-24 h-24 bg-no-repeat bg-contain `}></div>
  )
}

export default DottedAbstract