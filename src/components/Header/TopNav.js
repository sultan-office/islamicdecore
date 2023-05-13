import { BiChevronDown } from "react-icons/bi"
import Link from "next/link"
import { topNavdata } from "./Navbdata"
import Dropdown from "./Dropdown"

function TopNav() {
    return (
        <>
            <ul className="flex items-center gap-x-2 xl:gap-x-5 pl-1.5 xl:pl-2.5">
                {
                    topNavdata.map((list, index) => (
                        <li key={index} className="relative group">
                            <Link href={list.url}>
                                <div className="flex item-center gap-x-1 xl:gap-x-3.5 text-white py-3">
                                    <span className="text-sm xl:text-base leading-none">{list.title}</span>
                                    <BiChevronDown className="text-lg xl:text-xl" />
                                </div>
                            </Link>

                            {
                                // Dropdown Menu
                                list.dropdown ? <Dropdown dropdownData={list.dropdown} /> : null
                            }
                        </li>
                    ))
                }
                <li>
                    <Link href="dropShipping">
                        <span className="text-nav xl:font-semibold xl:text-base underline ml-2.5">
                            Start Dropshipping
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default TopNav