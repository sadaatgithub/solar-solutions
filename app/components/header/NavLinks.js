'use client'
import Link from 'next/link'
import config from '../../../app/index.json'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";


const NavLinks = ({setMenu}) => {
    const navlink = config.navigation
    const path = usePathname()
    

  return (
    <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-semibold uppercase p-1 [&>li]:cursor-pointer [&>li]:py-1 text-sky-900 [&>li:hover]:text-orange-500'>
            {navlink.map(link => 
            <li key={link.href} onClick={() => setMenu(false)}>
                <Link href={link.href} className="relative">
                {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-[10px] block h-[3px] w-full bg-orange-400"
                    />
                  )}{link.title}
                </Link>
                </li>
            )}
        </ul>
  )
}

export default NavLinks