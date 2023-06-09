"use client";
import Link from "next/link";
import config from "../../../app/index.json";
import { motion,AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState,useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import useOutsideClick from "@/config/hooks/useOutSIdeClick";
import { container, textVariant } from "@/lib/animation";

const NavLinks = ({ setMenu }) => {
  const ref = useRef();
  const navlink = config.navigation;
  const path = usePathname();
  const [subMenu,setSubMenu] = useState(false)
  useOutsideClick(ref, () => {
    setSubMenu(false)
  });

  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col md:flex-row gap-4 md:gap-6 font-semibold uppercase p-1 [&>li]:cursor-pointer [&>li]:py-1 text-sky-900">
      {navlink.map((link,idx) =>
        link.href === " " ? (
          <motion.li variants={textVariant(idx*0.1)} key={link.href}  ref={ref}  className={`${
            link.href === path ? "text-orange-500" : ""
          }  hover:text-orange-400 relative flex items-center gap-2`} onClick={()=> setSubMenu(!subMenu)}>
            {link.title} <FaChevronDown/>
            <AnimatePresence>
            {link.submenu && subMenu && (
            <motion.ul initial={{y:20, opacity:0}} animate={{y:10,opacity:1}} exit={{y:20, opacity:0}} className="flex rounded-sm shadow-2xl absolute left-0 top-8 z-20 w-[200px] bg-white font-normal  flex-col text-gray-500 normal-case text-base">
              {" "}
              {link.submenu.map((sublink, idx) => (
                <li  key={idx} className="hover:text-orange-500 hover:bg-gray-100" onClick={() => window.innerWidth <768 && setMenu(false)}>
                  <Link
                    href={`/services/${sublink
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                      className="block p-2"
                  >
                    {sublink}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
          </AnimatePresence>
            
            </motion.li>
        ) : (<motion.li variants={textVariant(idx*0.1)} key={link.href} onClick={() => window.innerWidth <768 && setMenu(false)}   className={`${
          link.href === path ? "text-orange-500" : ""
        } group hover:text-orange-400 relative`}><Link href={link.href} className=" relative">
            {link.href === path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-[8px] block h-[3px] w-full bg-orange-400"
              />
            )}
            {link.title}
          </Link>
          </motion.li>
        )

        
      )}
    </motion.ul>
  );
};

export default NavLinks;
