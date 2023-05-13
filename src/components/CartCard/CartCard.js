import { useEffect, useState } from "react"
import {RiDeleteBinLine} from 'react-icons/ri'
import Image from "next/image"

// Redux features
import { useSelector,useDispatch  } from 'react-redux'
import {incrementQuantity, decrementQuantity, removeItem} from '@/feature/Cart/cartSlice' 

function CartCard(props){

  // Redux Features
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart)
  
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cartData.cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

    const totalPrice =props.quantity * props.price

  return(
    <div className="flex items-center w-full mb-6 pb-6 border-b border-gray-100">
      <div className="rounded overflow-hidden basis-[20%]">
        <Image src={props.image} width={150} height={300}/>
      </div>
      <div className="pl-4 md:pl-6 basis-[80%]">
        <div className="flex justify-between items-center">
        <h5 className="text-sm md:text-lg text-dark-900 font-semibold line-clamp-1">{props.title}</h5>
        <span className="center-child py-0.5 md:py-0.5 px-1 md:px-2 border border-black rounded-sm text-xs leading-none md:text-sm">${props.price}</span>
        </div>
        <div className="flex items-center md:mt-2 mb-3 md:mb-7">
            <span className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">{props.color ? props.color : 'No Color select'}</span>
            <span className="h-3 md:h-5 border-l border-gray-300 mx-4"></span>
            <span className="text-[12px] md:text-sm text-tGreay-900 leading-relaxed font-normal">{props.Size ? props.size : 'No Color select'}</span>
        </div>
        <div className="flex justify-between items-start border-t border-gray-300 pt-3">
          
          <div className="flex">
            {/* cart item counter  */}
            <div className="border-y border-black w-fit  items-center grid grid-cols-3">
              <button type="button" onClick={() => dispatch(decrementQuantity(props.id))} className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-black text-base leading-none border-x border-black border-solid" >-</button>
              <span className="flex-[3] text-sm leading-none text-black inline-block text-center">{props.quantity}</span>
              <button type="button" onClick={() => dispatch(incrementQuantity(props.id))} className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-black text-base leading-none border-x border-black border-solid" >+</button>
            </div>
            {/* remove cart Item */}
            <button type="button" onClick={() => (dispatch(removeItem(props.id)))} className="text-gray-500 ml-3 text-2xl">
              <RiDeleteBinLine/>
            </button>
          </div>
          
          {/* Cart Total Price */}
          <p className="pt-2 text-sm md:text-base leading-1.2 text-gray-800 font-medium">
            <span className="mr-2 inline-block">Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </p>
          </div>
      </div>
    </div>
  )
}

export default CartCard
