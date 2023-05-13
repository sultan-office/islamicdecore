import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"



function HomeProduct(props) {
    const [Viewmore, setViewMore] = useState(5)
    const products = props.product.slice(1,Viewmore)

  return (
    <>
        <section className="py-8">
            <div className="container">
                <div className="bg-white shadow-sm border">
                    {/* Header Section */}
                    <div className="py-3 px-5 border-b-2 border-gray-300">
                        <h2 className="section-title">More To Love</h2>
                    </div>

                    {/* Card section */}
                    <div className="mt-8 p-5 pt-0 group-btn relative">
                        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                            {
                                products.map((data, index) => {
                                    return (
                                        <ProductCard id={data.id} key={index} image={data.image} title={data.title} rating={data.rating} price={data.price} description={data.description}/>

                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* Button Section */}
                    <div className="text-center py-8">
                            <button onClick={() => setViewMore(Viewmore + 4)} className="bg-primary rounded-full py-2 px-7 text-white">View More</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeProduct