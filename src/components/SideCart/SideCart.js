import Image from 'next/image'
import img1 from '../../../public/images/cart/cartImg.jpg'
import Overlay from '../Overlay/Overlay'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { useEffect } from 'react'

// Redux Featuer
import { useSelector,useDispatch  } from 'react-redux'
import {incrementQuantity, decrementQuantity, removeItem} from '@/feature/Cart/cartSlice' 

function SiteCartCard(props){

const dispatch = useDispatch()

    return(
        <>
        <div className="flex">
           <div className="flex-1 p-1 border">
                <Image src={props.image} alt="item" width={200} height={270}/>
           </div>
           <div className="pl-5 flex-[3] xs:flex-[2]">
                <div className="flex items-center justify-between mb-2">
                    <a href="#" className="text-sm leading-relaxed font-normal text-black hover:text-primary line-clamp-2">{props.title}</a>
                    <button  type="button" onClick={() => dispatch(removeItem(props.id))} className="text-xl leading-relaxed font-normal text-black hover:text-primary">×</button>
                </div>
                <h6 className="text-sm leading-relaxed font-normal text-gray-600">{props.quantity} x <span className="text-lg leading-relaxed font-medium text-primary">${props.price}</span></h6>
                {/* Item quantity Controler */}
                <div className="mt-2 flex w-fit bg-gray-300">
                    <button type="button"  onClick={() => dispatch(decrementQuantity(props.id)) } className="text-base px-1.5 py-0.5">-</button>
                    <div className="text-base text-center px-1.5 py-0.5 w-10">{props.quantity}</div>
                    <button type="button"  onClick={() => dispatch(incrementQuantity(props.id)) }  className="text-base px-1.5 py-0.5">+</button>
                </div>
           </div>
        </div>
        </>
    )
}



function SideCart(props) {

    // Redux features
    const cartData = useSelector((state) => state.cart)

    const showCart = props.showCart

    const getTotalQuantity = () => {
        let total = 0

        cartData.cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

  return (
    <>
        <Overlay showOverlay={showCart}/>
        <div className={`fixed  w-[300px] sm:w-[400px] h-full z-[150] top-0 bottom-0 -right-[500px] duration-500 trns-1 invisible `} style={showCart? {visibility : 'visible', right : '0'} : undefined}>
                <div className="bg-white py-5 h-full grid px-4">
                    <div className="max-h-full overflow-hidden grid self-">
                        {/* Cart Header Section =============== */}
                        <div className="flex justify-between mb-8 border-b border-gray-400 pb-2">
                            <h6 className="text-xl leading-relaxed font-medium">Your Cart Items: {getTotalQuantity() || 0}</h6>
                            <button className="group/closeBtn w-5 h-5 relative" onClick={() => props.cartHandler(false)}>
                                <AiOutlineClose className="group-hover/closeBtn:rotate-180 trns-1 text-2xl"/>
                            </button>
                        </div>
                        {/* Product Card ===============*/}
                        <div className="overflow-y-scroll">
                            <ul className=" pr-3">
                                 {
                                    cartData.cart.map((item) => (
                                        <li key={item.id} className="mb-5 pb-4 border-b border-b-gray-600">
                                            <SiteCartCard
                                                key={item.id}
                                                id={item.id}
                                                image={item.thumbnail}
                                                title={item.title}
                                                price={item.price} 
                                                quantity={item.quantity}
                                                />
                                        </li>
                                      ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Button Section ===============*/}
                    <div className="self-end">
                        <Link  onClick={() => props.cartHandler(false)} href="/cart" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1 bg-black hover:bg-primary-900 mb-3">View Cart</Link>
                        <Link  onClick={() => props.cartHandler(false)} href="/checkout" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1  bg-primary">Check Out</Link>
                    </div>
                </div>
        </div>
    </>
  )
}
export default SideCart
