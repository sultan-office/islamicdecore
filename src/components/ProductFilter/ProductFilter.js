import { CeatgoryAssest, PriceAssest, ColorAssest, BrandAssest } from "./FilterAssest"



function ProductFilter() {

    return (
        <>
            <div className="bg-gray-100 p-5 pb-7 text-lg mt-8">
                <h6 className="uppercase text-lg mb-3 border-b border-gray-200">Shop by</h6>
                <CeatgoryAssest />
                <PriceAssest />
                <ColorAssest />
                <BrandAssest />
            </div>
        </>
    )
}

export default ProductFilter