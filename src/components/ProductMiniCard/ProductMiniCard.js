import Image from "next/image"
import Link from "next/link"




function ProductMiniCard(props) {
    const discount = 10
    const totalDiscount = props.price - discount / 10

  return (
    <>
    <div className="flex gap-x-2">
        <div className="w-3/12 center-child">
            <Image src={props.img} alt="card-img" width={100} height={100} />
        </div>
        <div className="w-7/12">
            <Link href={props.title}>
                <h6 className="text-blue-400 text-sm mb-3 capitalize hover:text-accent line-clamp-2">{props.title}</h6>
            </Link>
            <div>
                <span className="text-primary">
                    ${props.price}
                </span>
                <del className="inline-block pl-2 text-sm text-gray-400">
                    {totalDiscount.toFixed(2)}$
                </del>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductMiniCard