"use client"
import React,{useState} from 'react'

import { submitContactForm } from '@/lib/submitContactForm'
import { ImSpinner8 } from "react-icons/im";


const initialFormValue = {
  name: "",
  email: "",
  subject: "",
  contact: "",
  message: "",
};
const initialState = { isLoading: false, error: "", values: initialFormValue };

const ContactForm = ({title}) => {
  const [state, setState] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);
  const { isLoading, values, error } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    console.log(values)
    try {
      await submitContactForm(values);

      setState(initialState);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      console.log(error)
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
    <form onSubmit={submitHandler}
        action=""
        className="z-10 md:w-1/2 text-gray-700 flex flex-col gap-6"
      >
        <div className="flex flex-col sm:flex-row  gap-2 w-full">
          <div className="flex flex-col gap-2 sm:w-1/2 lg:w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="border p-2 focus:outline-orange-500 " onChange={handleChange}/>
          </div>
          <div className="flex flex-col gap-2 sm:w-1/2">
          <label htmlFor="name">Mobile no</label>
          <input type="number" name="contact" className="border p-2 focus:outline-orange-500 " onChange={handleChange}/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="border p-2 focus:outline-orange-500" onChange={handleChange}/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Type your message..."
            className="p-3 border focus:outline-orange-500" onChange={handleChange}
          ></textarea>
        </div>
        {/* <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" className="border py-2" />
          <label htmlFor="terms">
            I accept <a href="#">Terms</a>
          </label>
        </div> */}
        <button className="w-full rounded-sm px-6 py-3 self-start relative btn_overlay md:max-w-xs bg-orange-500 text-white">
        {isLoading ? (
            <ImSpinner8 className="animate-spin self-center" />
          ) : 
            title
        }
        </button>
      </form>
  )
}

export default ContactForm