import Meta from "@/components/Meta"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductDetails from "@/components/ProductDetails/ProductDetails"
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct"

function singleProduct({ product, relatedProduct }) {
    return (
        <>
            <Meta title={product.title} />
            <Breadcrumb pages={[product.title]} />
            <ProductDetails product={product} />
            <RelatedProduct products={relatedProduct} />
        </>
    )
}

export default singleProduct


export async function getServerSideProps(context) {
    const res = await fetch('https://fakestoreapi.com/products/' + context.params.id);
    const resReletedProduct = await fetch('https://fakestoreapi.com/products');
    const product = await res.json()
    const reletedProduct = await resReletedProduct.json()
    return {
        props: {
            product: product,
            relatedProduct: reletedProduct,
        },
    };
}


export async function getStaticPath() {
    const res = await fetch('https://fakestoreapi.com/products');
    const ids = product.map((item) => item.id)
    const path = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
        path,
        fallback: false
    };
}




