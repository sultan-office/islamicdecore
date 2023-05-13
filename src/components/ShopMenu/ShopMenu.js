import { useState } from 'react';
import { SideNavData } from '../SideNav/SideNavData'
import Link from 'next/link'
import { BiChevronDown } from 'react-icons/bi'

function CetagoryMenu() {
    const [ShowSubnav, SetShowSubnav] = useState(false);
    const [navIndex, setNavIndex] = useState(null)

    function subnavHandler(value) {
        SetShowSubnav(!ShowSubnav)
        setNavIndex(value)
    }

    return (
        <>
            <div className="bg-gray-100 p-5 pb-7 text-lg">
                <h6 className="uppercase text-lg mb-3 border-b border-gray-200">Categories</h6>
                <ul>
                    {
                        SideNavData.map((list, index) => {
                            return (
                                <li className="text-black text-sm  mb-3 last:mb-0" key={index}>
                                    <div className=" justify-between items-center flex hover:text-accent">
                                        <Link href={`/shop`}>
                                            {list.title}
                                        </Link>
                                        <button onClick={() => subnavHandler(index)}>
                                            <BiChevronDown className={`text-lg trns-1 ${ShowSubnav && navIndex === index ? 'rotate-180' : 'rootate-0'}`} />
                                        </button>
                                    </div>
                                    {
                                        list.dropdown ? <ul className={`mt-2 pl-4 ${ShowSubnav && navIndex === index ? 'block' : 'hidden'}`}>

                                            {
                                                list.dropdown.map((dropdownList, dropDownindex) => {
                                                    return (
                                                        <li className="text-black text-sm  mb-3 last:mb-0 hover:text-accent" key={dropDownindex} >
                                                            <Link href={`/shop`}>{dropdownList.title}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul> : undefined
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default CetagoryMenu