import { useState } from "react"
import ProductInformation from "./productInformation"
import ProductReview from "../ProductReview/ProductReview/ProductReview"


const desrciption = 'desrciption'
const details = 'details'
const reviews = 'reviews'

function ProductInfo() {
    const [showTab, setShowTab] = useState('desrciption')

    return (
        <>
            <div className="pt-14">
                <ul className="flex flex-wrap center-child gap-3 sm:gap-x-5 border-b">
                    {
                        [desrciption, details, reviews].map((list, index) => {
                            return (
                                <li key={index} onClick={() => setShowTab(list)} className={`px-7 trns-1 capitalize pb-1 border-b-2 ${list === showTab ? 'border-b-accent' : 'border-transparent'}`}>{list}</li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* Product Information */}
            <div className="py-8 sm:py-10">
                <div className={`trns-1  overflow-hidden ${showTab === desrciption ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <p className="text-base leading-relaxed text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ad maiores necessitatibus? Non natus illum placeat fugit, quia repudiandae eligendi perspiciatis laudantium iste obcaecati nisi hic odit nulla, earum porro?</p>
                </div>

                <div className={`trns-1  overflow-hidden ${showTab === details ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <ProductInformation />
                </div>



                <div className={`trns-1 overflow-hidden ${showTab === reviews ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <ProductReview />
                </div>
            </div>
        </>
    )
}

export default ProductInfo