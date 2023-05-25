"use client"
import React,{useState} from 'react'
import config from "../../../app/index.json"
import { FaPlus,FaMinus } from 'react-icons/fa'


const Faqs = () => {
    const faqs = config.FAQs
    const [activeFaq,setActiveFaq] = useState(0)
    
  return (
    <div className="lg:w-2/3">
        <div className="flex flex-col gap-4  w-full">
       {faqs.map(faq => {

        const activeTab = activeFaq===faq.id
        return ( <div key={faq.id} className={`${activeTab? "border-orange-400":""} border cursor-pointer shadow-sm rounded-md`} onClick={() => activeTab? setActiveFaq(0):setActiveFaq(faq.id)}>
        <div className="px-6 py-5 ">
            <div className="flex justify-between items-center text-gray-700" >
            <p className="text-xl font-bold ">{faq.que}</p> {activeTab? <FaMinus/>:<FaPlus/>}
            </div>
        </div>
        <div className={`${activeTab? "[grid-template-rows:1fr]":"[grid-template-rows:0fr]"} grid transition-all duration-300 overflow-hidden`}>
    <div className="overflow-hidden"><p className={`px-6 pb-4 text-gray-500 `}>{faq.ans}</p></div>
    </div>
    </div>)
       })}
        </div>
    </div>
  )
}

export default Faqs