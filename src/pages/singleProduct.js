import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductDetails from "@/components/ProductDetails/ProductDetails"
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct"

function singleProduct({ product }) {
    return (
        <>
            <Breadcrumb pages={['Single products']} />
            <ProductDetails product={product[2]} />
            <RelatedProduct products={product} />
        </>
    )
}

export default singleProduct


export async function getServerSideProps(context) {
    const res = await fetch('https://fakestoreapi.com/products')
    const product = await res.json()
    return {
        props: {
            product: product
        },
    };
}