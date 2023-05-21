import {FaChevronUp} from "react-icons/fa"


const GoToTop = ({visible}) => {
  return (
    <butonn className={`${visible? "translate-x-0 opacity-100":"translate-x-56 opacity-0"} p-2 bg-slate-700 hover:bg-orange-500 fixed 
    right-5 bottom-5 z-[140] cursor-pointer text-white rounded-sm shadow-sm transition-all duration-500`} onClick={()=> window.scrollTo({top:0,behavior: 'smooth'})}> 
    <FaChevronUp/></butonn>
  )
}

export default GoToTop