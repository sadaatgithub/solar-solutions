import React from 'react'
import Logo from './header/Logo'
import SocialIcons from './SocialIcons' 
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col  gap-20 py-20 px-4 md:px-16 bg-gray-800 text-white">
            <div className="flex  w-full lg:flex-row flex-col gap-6">
                <div className="w-full grow flex flex-col gap-4 justify-center lg:justify-start">
                    <Logo/>
                    <p className="text-sm text-gray-300">We Offer a Wide Range of Quality Solar Panel Installation Services.</p>
                </div>

            <ul className="flex w-full justify-center gap-8">
            <li><Link href="/about">About</Link></li>
            <li><Link href="">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        
            <div className="w-full flex justify-center lg:justify-end">
            <SocialIcons className=""/>
            </div>
            </div>
            <div className="flex gap-6 justify-center border-t border-spacing-5 border-gray-600 py-4 text-sm">
                <p>2023 All rights reserved</p>
                <p>Privacy Policy</p>
                <p>Terms of service</p>

            </div>

    </footer>
  )
}

export default Footer