import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import Link from "next/link"

import { AiFillEye, AiOutlineHeart, AiOutlineBarChart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

// Redux Features
import { useDispatch } from "react-redux"
import { showQuickView } from "@/feature/QuickView/quickViewSlice"


function ProductCard(props) {
    const pathname = usePathname();
    const rate = Math.floor(props.rating.rate)
    const discount = 10
    const totalDiscount = props.price - discount / 10


    // Quick view Handler
    const dispatch = useDispatch();

    useEffect(() => {
        if (false) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    })

    return (
        <>
            <div className="w-full group/bar">
                <div className="w-full h-[240px] border bg-white overflow-hidden center-child relative">
                    <Image src={props.image} alt="product-image" width={270} height={150} className="max-h-full" />
                    <span className="inline-blcok px-2  py-0.5 text-sm absolute right-0 top-0 text-white bg-primary">-{discount}%</span>
                    <div className="group-hover/bar:translate-y-0 trns-1 w-full center-child gap-x-3 translate-y-14 py-1 border-t-2 bg-white border-primary absolute bottom-0 left-0 right-0">
                        <button onClick={() => dispatch(showQuickView(props))} className="w-8 h-8 rounded-full center-child text-xl text-gray-400 hover:bg-primary hover:text-white">
                            <AiFillEye />
                        </button>
                        <button className="w-8 h-8 rounded-full center-child text-xl text-gray-400 hover:bg-primary hover:text-white">
                            <AiOutlineHeart />
                        </button>
                        <button className="w-8 h-8 rounded-full center-child text-xl text-gray-400 hover:bg-primary hover:text-white">
                            <AiOutlineBarChart />
                        </button>
                    </div>
                </div>
                <div className="pt-2">
                    <Link href={`/shop/[id]`} as={`/shop/${props.id}`}
                    >
                        <span className="text text-sm text-blue-400 capitalize line-clamp-2 h-10 inline-block">{props.title}</span>
                    </Link>
                    <div className="mt-3 mb-2 flex items-center">
                        <div>
                            {
                                Array(rate).fill().map((_, index) => (
                                    <AiFillStar key={index} className="text-accent inline-block mr-0.5" />
                                ))
                            }

                            {
                                Array(5 - rate).fill().map((_, index) => (
                                    <AiFillStar key={index} className="text-gray-300 inline-block mr-0.5" />
                                ))
                            }
                        </div>
                        <span className="inline-block pl-3 text-blue-400 text-sm">{props.rating.count} reviews</span>
                    </div>
                    <div className="">
                        <span className="text-primary">
                            ${props.price}
                        </span>
                        <del className="inline-block pl-2 text-sm text-gray-400">
                            {totalDiscount.toFixed(2)}$
                        </del>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard