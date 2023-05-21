import React from 'react'

const ContactForm = ({title}) => {
  return (
    <form
        action=""
        className="z-10 md:w-1/2 text-gray-700 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="border py-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="border py-2" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Type your message..."
            className="p-3 border"
          ></textarea>
        </div>
        {/* <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" className="border py-2" />
          <label htmlFor="terms">
            I accept <a href="#">Terms</a>
          </label>
        </div> */}
        <button className="w-full rounded-sm px-6 py-3 self-start relative btn_overlay md:max-w-xs bg-orange-500 text-white">
          {title}
        </button>
      </form>
  )
}

export default ContactForm