
import { useState } from "react"
import Link from "next/link"
import { SideNavData } from "../SideNav/SideNavData"
import { BiChevronDown } from 'react-icons/bi'


export function CeatgoryAssest() {
    const [ShowSubnav, SetShowSubnav] = useState(false);

    return (
        <>
            <div className="mb-5">
                <div className=" justify-between items-center flex hover:text-accent text-sm capitalize font-medium" onClick={() => SetShowSubnav(!ShowSubnav)}>
                    <span>
                        Cetagory
                    </span>
                    <BiChevronDown className={` trns-1 ${ShowSubnav ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className={`mt-2 pl-3 overflow-hidden trns-1 ${ShowSubnav ? 'hidden' : 'block'}`}>
                    <ul>
                        {
                            SideNavData.map((list, index) => {
                                return (
                                    <li key={index} className="text-sm mb-3">
                                        <Link href={list.url}>{list.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export function PriceAssest() {
    const [ShowSubnav, SetShowSubnav] = useState(false);

    return (
        <>
            <div className="mb-5">
                <div className=" justify-between items-center flex hover:text-accent text-sm capitalize font-medium" onClick={() => SetShowSubnav(!ShowSubnav)}>
                    <span>
                        Price
                    </span>
                    <BiChevronDown className={` trns-1 ${ShowSubnav ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className={`mt-2 pl-3 overflow-hidden trns-1 ${ShowSubnav ? 'hidden' : 'block'}`}>
                    <ul>
                        {
                            Array(7).fill().map((_, index) => {
                                return (
                                    <li key={index} className="text-sm mb-3">
                                        {`$${0} - $${1000 * index}`}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export function ColorAssest() {
    const [ShowSubnav, SetShowSubnav] = useState(false);

    return (
        <>
            <div className="mb-5">
                <div className=" justify-between items-center flex hover:text-accent text-sm capitalize font-medium" onClick={() => SetShowSubnav(!ShowSubnav)}>
                    <span>
                        Colors
                    </span>
                    <BiChevronDown className={` trns-1 ${ShowSubnav ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className={`mt-2 pl-3 overflow-hidden trns-1 ${ShowSubnav ? 'hidden' : 'block'}`}>
                    <ul className="flex gap-x-3">
                        {
                            Array(4).fill().map((_, index) => {
                                return (
                                    <li key={index} className="w-5 h-5 rounded-full bg-black">

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export function BrandAssest() {
    const [ShowSubnav, SetShowSubnav] = useState(false);

    return (
        <>
            <div className="mb-5">
                <div className=" justify-between items-center flex hover:text-accent text-sm capitalize font-medium" onClick={() => SetShowSubnav(!ShowSubnav)}>
                    <span>
                        Price
                    </span>
                    <BiChevronDown className={` trns-1 ${ShowSubnav ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className={`mt-2 pl-3 overflow-hidden trns-1 ${ShowSubnav ? 'hidden' : 'block'}`}>
                    <ul>
                        {
                            Array(7).fill().map((_, index) => {
                                return (
                                    <li key={index} className="text-sm mb-3">
                                        Asus
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
