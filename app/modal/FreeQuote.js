import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import { FaTimes } from 'react-icons/fa'
const FreeQuote = ({closeModal}) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-30 grid place-items-center backdrop-blur-sm">
        <FaTimes onClick={() => closeModal(false)} color='white' className="absolute right-10 top-10 text-black cursor-pointer text-2xl"/>
        <div className="bg-white w-[90%] md:w-1/2 py-16 flex justify-center items-center rounded-md">
        <ContactForm title="Get A Quote" className="w-2/3" closeModal={closeModal}/>
        </div>
    </div>
  )
}

export default FreeQuote