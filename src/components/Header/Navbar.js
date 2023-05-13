import { BiMenu, BiChevronDown, BiPhoneCall } from 'react-icons/bi'
import { useState, useEffect } from 'react'

import TopNav from './TopNav'
function Navbar() {


    return (
        <>
            <div className={`bg-primary hidden md:block`}>
                <div className="container">
                    <div className="flex items-center">
                        <div className="lg:w-3/12">
                            <div className="flex items-center gap-x-0.5 border-t-2 border-t-black py-2.5">
                                <BiMenu className="text-nav text-3xl" />
                                <span className="text-nav font-normal xl:font-semibold text-sm xl:text-base">Shop By Department </span>
                                <BiChevronDown className="text-nav text-2xl" />
                            </div>
                        </div>
                        {/* Nav */}
                        <TopNav />
                        {/* Contact info */}
                        <div className="hidden lg:flex items-center gap-x-2.5 justify-end flex-auto">
                            <BiPhoneCall className="text-nav" />
                            <span className="text-nav">
                                Hotline:
                                <span className="xl:font-medium"> 09678-300400</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar