import { Rye,Satisfy } from 'next/font/google'
import logo from '../../../public/solar_logo.png'
import Image from 'next/image'
import Link from 'next/link'

const rye = Rye({weight:['400'],subsets:['latin']})
const satisfy = Satisfy({weight:['400'],subsets:['latin']})


const Logo = () => {
  return (
    <div className=" w-full  ">
      {" "}
      <Link href="/" className="flex gap-2">
      <Image src={logo} alt="" width={55} height={40} />
      <div className="flex flex-col">
        <h1 className={`${rye.className} text-2xl font-rye  text-orange-500`}>Solar Solutions</h1>
  <p className={`${satisfy.className} text-sm text-gray-500 font-satisfy`}>By Choudhary Engineering</p>
       
      </div>
      </Link>
    </div>
  )
}

export default Logo