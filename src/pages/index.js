import BestDeals from "@/components/BestDeals/BestDeals"
import Hero from "@/components/Hero/Hero"
import MainProduct from "@/components/MainProduct/MainProduct"
import Meta from "@/components/Meta"
import BannerImg from "@/components/BannerImg/BannerImg"
import HomeProduct from "@/components/HomeProduct/HomeProduct"

// images ===========
import bannerImg from '../../public/images/banner-img/banner-img.jpg'


export default function Home({ product }) {
  return (
    <>
      <Meta />
      <Hero />
      <BestDeals product={product.slice(1, 7)} />
      <MainProduct product={product} />
      <BannerImg img={bannerImg} />
      <HomeProduct product={product} />

    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://fakestoreapi.com/products')
  const product = await res.json()
  return {
    props: {
      product: product
    },
  };
}


