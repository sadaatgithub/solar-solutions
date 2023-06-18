"use client";
import React, { useEffect, useState } from "react";

import { ImSpinner8 } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import useForm from "@/app/hooks/useForm";

const initialFormValue = {
  name: "",
  email: "",
  subject: "",
  contact: "",
  message: "",
};

const ContactForm = ({ title, className, closeModal }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const isLoading = false;
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitted,
    isSubmitting,
  } = useForm(
    initialFormValue
    // onSubmit
  );

  useEffect(() => {
    isSubmitted
      ? (setIsSuccess(true),
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000),
        closeModal
          ? setTimeout(() => {
              closeModal();
            }, 5000)
          : null)
      : null;
      
  }, [isSubmitted]);

 

  return (
    <>
      {/* {isSubmitting && <span className="loader"></span>} */}
      {isSuccess ? (
        <div className="w-[90%] bg-white px-4 md:px-16 py-6 text-slate-700 rounded-md  text-center flex items-center justify-center flex-col gap-6">
          <FaCheckCircle className="text-6xl text-teal-500" />
          <p className="w-full text-xl">
            Form submitted successfully.
            <br /> We will get back to you soon..!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`${
            className || " "
          } z-10  text-gray-700 flex flex-col gap-6`}
        >
          <div className="flex flex-col sm:flex-row  gap-2 w-full">
            <div className="flex flex-col gap-2 sm:w-1/2 lg:w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                disabled={isLoading}
                value={values.name}
                className="border p-2 focus:outline-orange-500 rounded-md"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label htmlFor="contact">Mobile no</label>
              <input
                type="number"
                disabled={isLoading}
                value={values.contact}
                name="contact"
                className="border p-2 focus:outline-orange-500 rounded-md"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              disabled={isLoading}
              value={values.email}
              className="border p-2 focus:outline-orange-500 rounded-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              value={values.message}
              disabled={isLoading}
              placeholder="Type your message..."
              className="p-3 border focus:outline-orange-500 rounded-md"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" className="border py-2" />
          <label htmlFor="terms">
            I accept <a href="#">Terms</a>
          </label>
        </div> */}
          <button className="self-center rounded-sm px-6 py-3 w-full relative btn_overlay  bg-orange-500 text-white flex justify-center items-center">
            {isSubmitting ? (
              <ImSpinner8 className="animate-spin self-center" />
            ) : (
              title
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
