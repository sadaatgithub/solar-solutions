"use client"
import React,{useState} from 'react'

import { submitContactForm } from '@/lib/submitContactForm'
import { ImSpinner8 } from "react-icons/im";
import { FaCheckCircle } from 'react-icons/fa';
import useForm from '@/app/hooks/useForm';

const initialFormValue = {
  name: "",
  email: "",
  subject: "",
  contact: "",
  message: "",
};
const initialState = { isLoading: false, error: "", values: initialFormValue };

const ContactForm = ({title,className,closeModal,setIsSuccess}) => {
  
  const [state, setState] = useState(initialState);
  // const [isSuccess, setIsSuccess] = useState(true);
  const { isLoading, values, error } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await submitContactForm(values);

      setState(initialState);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeModal(false)
      }, 5000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
 

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setState((prev) =>({
      ...prev,values:{
        ...prev.values,
        [name]:value,
      }
    }))
  } 

  return (
    <>
  <form onSubmit={handleSubmit}
        className={`${className || " "} z-10  text-gray-700 flex flex-col gap-6`}
      >
       {error && <p className="text-red-600">{error}</p>} 
        <div className="flex flex-col sm:flex-row  gap-2 w-full">
          <div className="flex flex-col gap-2 sm:w-1/2 lg:w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" disabled={isLoading} value={values.name} className="border p-2 focus:outline-orange-500 rounded-md" onChange={handleChange} required/>
          </div>
          <div className="flex flex-col gap-2 sm:w-1/2">
          <label htmlFor="contact">Mobile no</label>
          <input type="number" disabled={isLoading} value={values.contact} name="contact" className="border p-2 focus:outline-orange-500 rounded-md" onChange={handleChange} required/>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" disabled={isLoading} value={values.email} className="border p-2 focus:outline-orange-500 rounded-md" onChange={handleChange} required/>
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
            className="p-3 border focus:outline-orange-500 rounded-md" onChange={handleChange}
          ></textarea>
        </div>
        {/* <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" className="border py-2" />
          <label htmlFor="terms">
            I accept <a href="#">Terms</a>
          </label>
        </div> */}
        <button className="self-center rounded-sm px-6 py-3 w-full relative btn_overlay  bg-orange-500 text-white flex justify-center items-center">
        {isLoading ? (
            <ImSpinner8 className="animate-spin self-center" />
          ) : 
            title
        }
        </button>
      </form>
    
    </>
  )
}

export default ContactForm