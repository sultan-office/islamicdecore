import Image from "next/image"
import { useState } from "react"
import { FaStar } from 'react-icons/fa'

import ReviewCard from "../ReviewCard"


function ReplyCard() {
    return (
        <>
            <div>
                <div className="flex mb-3 items-center">
                    <div className="w-14 center-child overflow-hidden mr-5 h-14 rounded-full border border-gray-300">
                    </div>
                    <div>
                        <h6>Jone Doe</h6>
                        <p><time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                    </div>
                </div>

                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti voluptatibus debitis vitae ipsa?</p>
            </div>
        </>
    )
}



function ProductReview() {
    const [rate, setRate] = useState(0)
    const getRate = rate
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-x-10">
                {/* Reviews Section */}
                <div className="w-full lg:w-7/12 xl:w-8/12 order-last lg:order-first ">
                    <h6 className="text-xl flex-wrap lg:mb-8 flex items-center justify-between border-b pb-5">
                        <span>Customer Reviews:</span>
                        <span className="text-primary text-lg">Total Reviews: 5</span>
                    </h6>
                    <div className="border-b pb-8 bg-gray-100 p-5 mb-7">
                        <div>
                            <ReviewCard />
                        </div>
                        <div className="pl-6 mt-7 border-t pt-5">
                            <ReplyCard />
                        </div>
                    </div>
                </div>

                {/* Give Reviews */}
                <div className="w-full lg:w-5/12 xl:w-4/12 mb-20 lg:mb-0">
                    <h6 className="text-xl mb-5">Give Your Review :</h6>
                    <form action="#">
                        <div>
                            <div className="mt-1 mb-3">
                                {
                                    Array(getRate).fill().map((_, index) => (
                                        <button key={index} type="button" onClick={() => setRate(index + 1)}>
                                            <FaStar key={index} className="text-accent inline-block mr-0.5" />
                                        </button>

                                    ))
                                }

                                {
                                    Array(5 - getRate).fill().map((_, index) => (
                                        <button key={index} type="button" onClick={() => setRate(index + 1)}>
                                            <FaStar key={index} className="hover:text-accent text-gray-300 inline-block mr-0.5" />
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <input type="text" placeholder="Enter Your Name" className="form-input mb-5" />
                        <input type="Email" placeholder="Enter Your Email" className="form-input mb-5" />
                        <textarea placeholder="Write Message" className="h-[150px] form-input mb-6 " />
                        <button className="bg-gray-800 text-white text-center w-full py-3 hover:bg-black" type="button">Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductReview


