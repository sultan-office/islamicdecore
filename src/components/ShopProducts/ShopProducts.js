import { useState } from "react"
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import CetagoryMenu from "../ShopMenu/ShopMenu"
import CetagoryTopBar from "../ShopTopBar/ShopTopBar"
import ProductFilter from "../ProductFilter/ProductFilter"
import ProductCard from "../ProductCard/ProductCard"
import ProductListCard from "../ProductListCard/ProductListCard"
import Overlay from "../Overlay/Overlay"


function ShopProducts(props) {
    const [productView, setproductView] = useState('grid')
    const [showProducts, setShowProduct] = useState(7)
    const [showNav, setShowNav] = useState(false)

    console.log(showNav)
    
    const gridProduct = props.products.slice(1,showProducts)

    const viewHandler = (value) => {
        setproductView(value)
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="lg:flex gap-x-10 mt-5">
                        <div onClick={() => setShowNav(true)} className="flex lg:hidden justify-between items-center bg-gray-100 p-2 mb-4 cursor-pointer">
                            <h6 className="text-base font-semibold">Shop By</h6>
                            <AiOutlinePlus className="text-2xl"/>
                        </div>
                        <div className={`lg:w-3/12 w-full xs:w-9/12 bg-gray-50 fixed lg:static right-0 top-0 bottom-0 z-[110] lg:z-auto trns-1 origin-right p-7 lg:p-0 ${showNav? 'scale-x-100 overflow-scroll' : 'scale-x-0 lg:transform-none'}`}>
                            <div className="text-right mb-7 lg:hidden">
                                <button onClick={() => setShowNav(false)} className="text-2xl">
                                    <AiOutlineClose/>
                                </button>
                            </div>
                            <CetagoryMenu />
                            <ProductFilter />
                        </div>
                        <div className="w-full lg:w-9/12">
                            <CetagoryTopBar viewHandler={viewHandler} active={productView}/>
                            {/* Shop Grid View ============== */}

                            <div className={`mt-8 overflow-hidden trns-1 ${productView === 'grid' ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
                                <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
                                    {
                                        props.products.map((data, index) => {
                                            return (
                                                <ProductCard key={index} id={data.id} image={data.image} title={data.title} rating={data.rating} price={data.price} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                            {/* Shop List View ============== */}
                            <div className={`overflow-hidden trns-1 ${productView === 'list' ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
                                <ul>
                                {
                                    gridProduct.map((data, index) => {
                                        return (
                                            <li key={index} className="mt-5 first:mt-0">
                                                <ProductListCard img={data.image} title={data.title} description={data.description} rating={data.rating} price={data.price} />
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                                <div className="text-center mt-8">
                                    <button onClick={() => setShowProduct(showProducts + 7)} className="text-white bg-primary px-9 py-3 rounded-md">Load More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Overlay showOverlay={showNav}/>
            </section>
        </>
    )
}

export default ShopProducts