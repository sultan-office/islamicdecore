import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import CartCard from "@/components/CartCard/CartCard"
import Link from "next/link"

// Redux fetures
import { useSelector, useDispatch  } from 'react-redux'
import { clearCartItem } from "@/feature/Cart/cartSlice"
import { useState } from "react"


function Cart() {
  const [grandTotal, setGrandTotal] = useState(0)
  // Redux features
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

  const totalProducts = getTotal().totalPrice.toFixed(2)
  const standard = 0
  const express = 10

  const updateCart = ()=>{
    let total = getTotal().totalPrice + express
    setGrandTotal(total.toFixed(2))
  }

  const clearCart = ()=>{
  
    dispatch(clearCartItem())

  }


  return (
    <>
        <Breadcrumb pages={['cart']}/>
        <div className="container">
          {/* Left Side Cart items Section */}
          <div className="py-12 sm:px-10 lg:px-0 lg:py-20 xl:py-24">
              <h4 className="text-xl sm:text-2xl leading-4 text-gray-900 font-semibold mb-8">Your cart items: {getTotal().totalQuantity}</h4>
              <div className="flex flex-col lg:flex-row">
                <div className="pt-7 border-t border-gray-100 lg:w-7/12">
                  {
                    cartData.cart.map((item) => {
                      return(
                        <CartCard
                          key={item.id}
                          id={item.id}
                          image={item.thumbnail}
                          title={item.title}
                          price={item.price} 
                          quantity={item.quantity}
                          size={item.size}
                          color={item.color}
                      />
                      )
                    })
                  }
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    <Link href='/' className="bg-black hover:bg-primary py-4 text-sm uppercase text-white leading-none center-child">Continue Shopping</Link>
                    <button type="button" onClick={updateCart} className="bg-accent hover:bg-primary py-4 text-sm uppercase text-white leading-none center-child">Update Cart</button>
                    <button type="button" onClick={clearCart} className="bg-primary py-4 text-sm uppercase text-white leading-none center-child">Clear Cart</button>
                  </div>
                </div>

                  {/* Right side Order Area*/}
                <div className="lg:w-5/12 lg:pl-12 mt-7 lg:mt-0">
                  {/* Coupon Card Area ================*/}
                  <div className="bg-gray-100 px-7 py-10">
                    <div className=" relative before:content-[''] before:h-px before:absolute before:left-0 before:right-0 before:top-[13px] before:bg-gray-200" >
                      <h6 className="text-lg leading-1.2 font-bold mb-5 bg-gray-100 relative z-[1] inline-block pr-3"> Use Coupon Code</h6>
                    </div>
                      <p className="text-sm leading-relaxed text-gray-500 mb-3.5">Enter your coupon code if you have one.</p>
                      <div className="xl:flex gap-x-3">
                        <input type="text" className="bg-white form-input block w-full xl:w-7/12 px-2.5 py-2 text-base mb-6 xl:mb-0"/>
                        <button className="bg-black hover:bg-primary w-full xl:w-5/12 py-4 px-5 text-sm uppercase text-white leading-none center-child block">Apply Coupon</button>
                      </div>
                  </div>
                  {/* Checkout Card Area ================*/}
                  <div className="bg-gray-100 px-7 mt-8 py-10">
                    <div className="relative before:content-[''] before:h-px before:absolute before:left-0 before:right-0 before:top-[13px] before:bg-gray-200">
                      <h6 className="text-lg leading-1.2 font-bold mb-5 bg-gray-100 relative z-[1] inline-block pr-3"> Cart Total</h6>
                    </div>
                      <p className="text-black text-base flex justify-between mt-6 mb-5">
                          <span>Total Products </span>
                          <span className="font-bold">${totalProducts}</span>
                      </p>
                      <div>
                        <form action="#">
                          <ul>
                            <li className="text-base text-gray-500 flex justify-between mb-2.5"> 
                              <label htmlFor="Standard">
                                <input type="checkbox" name="Standard" id="Standard" className="mr-2"/> Standard
                              </label>
                              <span>${standard}</span>
                            </li>
                            <li className="text-base text-gray-500 flex justify-between mb-2.5"> 
                              <label htmlFor="Standard">
                                <input type="checkbox" name="Standard" id="Standard" className="mr-2"/> Express 
                              </label>
                              <span>${express}</span>
                            </li>
                            
                          </ul>
                        </form>
                      </div>
                      <h6 className="flex items-center justify-between text-base md:text-xl text-primary font-medium mt-10">
                        <span>Grand Total</span>
                        <span> ${grandTotal}</span>
                      </h6>
                      <Link href="/checkout" className="bg-black hover:bg-primary-900 py-4 w-full text-sm uppercase text-white leading-none center-child block mt-7">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Cart