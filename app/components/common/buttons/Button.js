import Link from 'next/link'
import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className || ""} px-6 py-3 relative  rounded-sm btn_overlay hover:text-white`}>
      <Link href="/contact">{text}</Link>
        </button>
  )
}

export default Button