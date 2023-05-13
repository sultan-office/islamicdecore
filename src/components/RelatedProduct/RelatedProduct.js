import ProductCard from "../ProductCard/ProductCard"

function RelatedProduct(props) {
    const product = props.products ? props.products.slice(1, 6) : null
    return (
        <section className="py-10 bg-gray-100 lg:mt-24">
            <div className="container">
                <h4 className="section-title">
                    Related Product Products
                </h4>
                <div className="mt-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid gap-x-6 gap-y-8 ">
                    {
                        product.map((data, index) => {
                            return (
                                <ProductCard key={index} id={data.id} image={data.image} title={data.title} rating={data.rating} price={data.price} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct

