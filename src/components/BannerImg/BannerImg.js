import Image from "next/image"
function BannerImg(props) {
  return (
    <>
    <section>
        <div className="container">
            <Image src={props.img} alt="banner-img" width={1200} heigh={300} className="w-full max-h-full" />
        </div>
    </section>
    </>
  )
}

export default BannerImg