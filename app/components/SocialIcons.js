import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialIcons = ({className}) => {
  return (
    <div className={`${className | ""} flex gap-4  [&>svg]:p-1 [&>svg]:rounded-sm [&>svg]:cursor-pointer [&>svg]:bg-orange-400 `}>
    <FaInstagram  className="text-2xl text-white"/>
    <FaFacebookF className="text-2xl text-white"/>
    <FaTwitter className="text-2xl text-white"/>

</div>
  )
}

export default SocialIcons