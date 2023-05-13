import Meta from "@/components/Meta"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductDetails from "@/components/ProductDetails/ProductDetails"
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct"

function singleProduct({ product, relatedProduct }) {
    console.log(product)
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


export async function getStaticProps(context) {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id} `);
    const product = await res.json()

    const resReletedProduct = await fetch('https://fakestoreapi.com/products');
    const reletedProduct = await resReletedProduct.json()
    return {
        props: {
            product: product,
            relatedProduct: reletedProduct,
        },
    };
}


export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products');
    const product = await res.json()
    const ids = product.map((item) => item.title)
    const path = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
        paths: path,
        fallback: false
    };
}




