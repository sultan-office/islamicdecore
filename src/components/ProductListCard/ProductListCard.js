
import Image from "next/image"
import Link from "next/link"
import {AiFillEye, AiOutlineHeart} from 'react-icons/ai'
import { FaStar} from 'react-icons/fa'



function ProductListCard(props) {
    const rate = 5
    const discount = 10
    const totalDiscount = props.price - discount / 10

    
    return (
        <>
            <div className="w-full flex flex-col gap-y-10 md:flex-row gap-x-8 px-4 py-8 md:p-8 border border-transparent hover:border-gray-300">
                <div className="w-full md:w-3/12 center-child relative">
                    <Image src={props.img} alt="product-image" width={270} height={150} />
                    <span className="inline-blcok px-2  py-0.5 text-sm absolute right-0 top-0 text-white bg-primary">-{discount}%</span>
                </div>

                <div className="w-full md:w-6/12">
                    <Link href="/">
                        <span className="text text-base text-blue-400 capitalize line-clamp-2">{props.title}</span>
                    </Link>
                    <div className="pt-4">
                      <p className="text-sm leading-loose text-gray-800 line-clamp-3 mb-3">{props.description}</p>
                        <div>
                            <div className="inline-flex gap-x-1.5 mr-3">
                                {
                                    Array(rate).fill().map((_, id) => <FaStar key={id} className="text-accent text-sm leading-none" />)
                                }

                                {
                                    Array(5 - rate).fill().map((_, id) => <FaStar key={id} className="text-gray-300 text-sm leading-none" />)
                                }
                            </div>
                            <span className="text-sm leading-none text-gray-400 font-normal">{67} Reviews</span>
                        </div>
                    </div>
                </div>

                  <div className="w-full md:w-3/12">
                      <div>
                          <span className="text-primary text-lg">
                              ${props.price}
                          </span>
                          <del className="inline-block pl-2 text-base text-gray-400">
                              {totalDiscount.toFixed(2)}$
                          </del>
                      </div>
                      <div className="flex gap-x-5 items-center mt-2">
                          <button className="flex items-center text-black  hover:text-primary">
                                <AiFillEye/>
                                <span className="capitalize text-sm pl-2">Wishlist</span>
                          </button>
                          <button className="flex items-center text-black  hover:text-primary">
                          <AiOutlineHeart/>
                                <span className="capitalize text-sm pl-2">Compare</span>
                          </button>
                      </div>
                  </div>
            </div>
        </>
    )
}

export default ProductListCard
