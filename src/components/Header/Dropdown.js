import Link from "next/link"

function Dropdown(props) {
    return (
        <div className="w-[270px] bg-white shadow-md absolute top-[115%] invisible opacity-0 trns-1 left-0 border border-gray-100 px-4 group-hover:top-[99%] group-hover:visible group-hover:opacity-100">
            <ul>
                {
                    props.dropdownData.map((list, index) => (
                        <li key={index} className="py-2 xl:py-2.5 border-b border-b-gray-200 last:border-0">
                            <Link href={list.url}>
                                <span className="text-sm xl:text-base text-black hover:text-primary ">{list.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dropdown