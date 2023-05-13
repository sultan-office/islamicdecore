import { useEffect, useState } from 'react'
import Link from 'next/link'


import { MdOutlineMenu } from 'react-icons/md'
import { BsSearch, BsArrowLeft } from 'react-icons/bs'
import { GrHome } from 'react-icons/gr'
import { FaShoppingBasket } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai'

import SideNav from '@/components/SideNav/SideNav'
import SearchBox from '@/components/SearchBox/SearchBox'

function MobileNav(props) {
  const [showNav, setShowNav] = useState(false)
  const [showSerchBox, setshowSerchBox] = useState(false)

  useEffect(() => {
    if (showNav || showSerchBox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <div className="bg-white py-1.5 fixed z-[100] w-full bottom-0 border-t shadow-[-10px_0px_5px_rgba(0,0,0,0.3)]">
      <div className="container">
        <div className="flex justify-between items-center">
          <button onClick={() => setShowNav(true)} className="text-3xl"><MdOutlineMenu /></button>
          <button onClick={() => { setshowSerchBox(true) }} className="text-3xl"><BsSearch /></button>
          <button className="text-3xl"><GrHome /></button>
          <button onClick={() => props.cartHandler(true)} className="text-3xl relative"><FaShoppingBasket />
            <span className="absolute p-1 rounded-full bg-accent -right-2 text-xs -top-1">12</span>
          </button>
          <button onClick={() => props.LoginBoxHandler(true)} className="text-3xl"><AiOutlineUser /></button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`fixed w-full bg-w-full bg-[rgba(0,0,0,0.8)] top-0 bottom-0 left-0 origin-left trns-1 ${showNav ? 'scale-x-100' : 'scale-x-0'}`}>
        <button className="absolute top-3 right-4 text-white text-4xl" onClick={() => setShowNav(false)}>
          <BsArrowLeft />
        </button>
        <div className="w-9/12 bg-white h-full py-8 px-5">
          <div>
            <div className="w-fit mx-auto mb-4">
              <Link href="/">
                <span className="text-3xl block leading-none text-primary">ISLAMIC</span>
                <span className="text-lg leading-none text-black">Home Decor</span>
              </Link>
            </div>
          </div>
          <SideNav />
        </div>
      </div>
      {/* Responsive Search Bosx */}
      <div className={`bg-white py-8 px-4 z-[100] fixed left-0 right-0 top-0 bottom-0 h-full w-full origin-top trns-1 ${showSerchBox ? 'scale-y-100' : 'scale-y-0'}`}>
        <div className="pb-4 text-right">
          <button onClick={() => setshowSerchBox(false)}>
            <AiOutlineClose className="text-3xl" />
          </button>
          <div className="mt-4">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav