import { useState } from "react"
import ProductDetailsCard from "./ProductDetailsCard"
import ProductInfo from "../ProductInfo/ProductInfo"

function ProductDetails(props) {
    return (
        <section className="py-14 lg:py-20 ">
            <div className="container">
                <div className="pb-5 border-b">
                    <ProductDetailsCard product={props.product} />
                </div>
                <ProductInfo />
            </div>
        </section>
    )
}

export default ProductDetails
