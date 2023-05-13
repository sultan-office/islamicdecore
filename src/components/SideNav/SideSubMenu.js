import Link from "next/link"
import { useEffect, useState } from "react"

function SideSubMenu(props) {

    const [isTrue, setIsTrue] = useState(false)

    useEffect(() => {
        setIsTrue(props.showSubNav)
    })

    return (
        <div className={`lg:w-[270px] bg-white lg:shadow-md lg:absolute top-7 lg:invisible lg:opacity-0 trns-1 left-full lg:border border-gray-100  origin-top px-4 group-hover:top-0 group-hover:visible  group-hover:opacity-100  trns-1 ${isTrue ? 'block' : 'hidden lg:block'}`}>
            <ul>
                {
                    props.subMenudata.map((list, index) => (
                        <li key={index} className="py-2.5 border-b border-b-gray-200 last:border-0">
                            <Link href='/shop'>
                                <span className="text-black hover:text-primary ">{list.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideSubMenu