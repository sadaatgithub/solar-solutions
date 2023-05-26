"use client";
import React, { useEffect, useState } from "react";
import { TfiHeadphoneAlt, TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialIcons from "../SocialIcons";
import GoToTop from "../GoToTop";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const burgerHandler = () => {
    setBurgerMenu(!burgerMenu);
  };

  const burgerIcon = burgerMenu ? <FaTimes /> : <FaBars />;
  const [animateNav, setAnimateNav] = useState(false);
  const [goToTopVisible, setGoToTopVisible] = useState(false);

  const navbarOnScroll = () => {
    window.scrollY >= 350 ?  (setAnimateNav(true),setGoToTopVisible(true))
    : (setAnimateNav(false),setGoToTopVisible(false));
   
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarOnScroll);
    return () => {
      window.removeEventListener("scroll", navbarOnScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-20 md:static   flex flex-col md:px-16  px-2 shadow-md  bg-white  rounded-sm  mx-auto">
      {/* Logo */}

      <div className="grid grid-cols-6 col-span-full border-b py-3 relative">
        <div className="md:col-span-full lg:col-span-2 col-span-full">
          <Logo />
        </div>
        <div className="col-span-4 hidden lg:flex  justify-end gap-8 [&>div]:items-center [&>div]:justify-center">
          <div className="flex gap-3">
            <TfiHeadphoneAlt size={35} color={"orange"} />
            <div className="flex flex-col">
              <p className="text-gray-300 leading-4 text-sm">Call Us</p>
              <p>8484939335</p>
            </div>
          </div>
          <div className="flex gap-3">
            <TfiEmail size={35} color={"orange"} />
            <div className="flex flex-col">
              <p className="text-gray-300 leading-4 text-sm">Email Us</p>
              <p>solutionsolar42@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3">
            <TfiLocationPin size={35} color={"orange"} />
            <div className="flex flex-col">
              <p className="text-gray-300 leading-4 text-sm">Address</p>
              <p>Bhavani Nagar, Paradi,Nagpur</p>
            </div>
          </div>
        </div>
        <button
          className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-orange-500"
          onClick={() => burgerHandler()}
        >
          {burgerIcon}
        </button>
      </div>

      {/* Navlink */}
      <div className={`${burgerMenu? "[grid-template-rows:1fr]":"[grid-template-rows:0fr]"} grid  md:flex  transition-[grid-template-rows] duration-500 w-full`}>

      <div
        className={` flex flex-col md:flex-row justify-between md:items-center gap-y-6 w-full overflow-hidden md:overflow-visible`}
      >
        <NavLinks setMenu={setBurgerMenu}/>

        <SocialIcons />
      </div>
      </div>

      <GoToTop visible={goToTopVisible} />
      <AnimatePresence>
        {animateNav && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, type: "none" }}
            className={`hidden md:flex fixed top-0  left-0 right-0 justify-between px-4 lg:px-20 py-2 bg-white z-20 shadow-sm items-center `}
          >
            <Logo />
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
