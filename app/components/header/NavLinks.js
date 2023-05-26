"use client";
import Link from "next/link";
import config from "../../../app/index.json";
import { motion,AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavLinks = ({ setMenu }) => {
  const navlink = config.navigation;
  const path = usePathname();
  const [subMenu,setSubMenu] = useState(false)

  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 font-semibold uppercase p-1 [&>li]:cursor-pointer [&>li]:py-1 text-sky-900">
      {navlink.map((link) =>
        link.href === " " ? (
          <li key={link.href}    className={`${
            link.href === path ? "text-orange-500" : ""
          }  hover:text-orange-400 relative flex items-center gap-2`} onClick={()=> setSubMenu(!subMenu)}>
            {link.title} <FaChevronDown/>
            <AnimatePresence>
            {link.submenu && subMenu && (
            <motion.ul initial={{y:20, opacity:0}} animate={{y:10,opacity:1}} exit={{y:20, opacity:0}} className="flex rounded-sm shadow-2xl absolute left-0 top-8 z-20 w-[200px] bg-white font-normal  flex-col text-gray-500 normal-case text-base">
              {" "}
              {link.submenu.map((sublink, idx) => (
                <li key={idx} className="hover:text-orange-500 hover:bg-gray-100 p-2">
                  <Link
                    href={`/services/${sublink
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                      className=""
                  >
                    {sublink}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
          </AnimatePresence>
            
            </li>
        ) : (<li key={link.href} onClick={() => setMenu(false)}   className={`${
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
          </li>
        )

        // <li
        //   key={link.href}
        //   onClick={() => setMenu(false)}
          // className={`${
          //   link.href === path ? "text-orange-500" : ""
          // } group hover:text-orange-400 relative`}
        // >
        //   <Link href={link.href} className="relative ">
        //     {link.href === path && (
        //       <motion.span
        //         layoutId="underline"
        //         className="absolute left-0 -bottom-[10px] block h-[3px] w-full bg-orange-400"
        //       />
        //     )}
        //     {link.title}
        //   </Link>
          // {link.submenu && (
          //   <ul className=" flex border-t-2 translate-y-4 group-hover:translate-y-1  rounded-sm shadow-2xl absolute top-0 left-0 z-[999] bg-white p-4 font-normal  flex-col gap-2 text-gray-500 normal-case text-base">
          //     {" "}
          //     {link.submenu.map((sublink, idx) => (
          //       <li key={idx} className="hover:text-orange-500">
          //         <Link
          //           href={`/services/${sublink
          //             .split(" ")
          //             .join("-")
          //             .toLowerCase()}`}
          //         >
          //           {sublink}
          //         </Link>
          //       </li>
          //     ))}
          //   </ul>
          // )}
        // </li>
      )}
    </ul>
  );
};

export default NavLinks;
