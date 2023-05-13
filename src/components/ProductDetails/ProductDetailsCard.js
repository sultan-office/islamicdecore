
import Image from 'next/image'
import react,{ useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'

// Swiper JS  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Redux Features
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, incrementQuantity, decrementQuantity, } from '@/feature/Cart/cartSlice' 


function ProductDetailsCard(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [count, setCount] = useState(0)

    // Tostify Message
    const notify = () => toast("Product Added To Cart");

    const product = props.product
    const images = Array(5).fill(product.image)
    const rate = Math.floor(product.rating.rate)
    const discount = 10
    const discountprice = product.price - discount / 10

    const cartItem = {
        id : props.product.id,
        title : props.product.title,
        thumbnail : props.product.image,
        price : props.product.price,
        size: 'xl',
        color: 'red'
    }

    // Redux Feature ===============
    const dispatch = useDispatch()
    const cartdata = useSelector((state) => state.cart.cart)

    useEffect(() => {
        cartdata?.map((data) => {
            if(data.id === cartItem.id){
                setCount(data.quantity || 0)
            }
        })

    })
   

    // add to cart handler
    const addCartHandler = ()=>{
        dispatch(addToCart(cartItem))
        
        count > 0 ? null : notify()
    }

    return (
        <div>
            <div className="flex flex-col lg:flex lg:flex-row gap-y-7 gap-x-8 items-start">
                {/* Images Section */}
                <div className="w-full sm:w-[600px] mx-auto lg:w-6/12">
                    <div className="border">
                        {/* Main Image Section */}
                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"

                        >
                            {
                                images.map((image, index) =>
                                    <SwiperSlide key={index}>
                                        <div className="center-child p-5">
                                            <Image src={image} alt="products" className="mx-auto" width={300} height={420} />
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                    {/* Thumb Images */}
                    <div className="mt-3 sm:mt-6">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"

                            breakpoints={{
                                520 : {
                                    slidesPerView : 4,
                                },
                                640 : {
                                    slidesPerView : 4,
                                },

                                768 :{
                                    slidesPerView : 5
                                }
                            }}

                        >
                            {
                                images.map((image, index) =>
                                    <SwiperSlide key={index}>
                                        <div className="p-2 sm:p-4 border">
                                            <Image src={image} alt="img-1" width={500} height={600} className="w-full" />
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
                {/* Text Section  */}
                <div className="w-full sm:w-[600px] mx-auto lg:w-6/12 mt-8 lg:mt-0">
                    <h4 className="text-lg xs:text-2xl leading-normal font-medium text-black mb-3 sm:mb-5">{product.title}</h4>
                    <h6 className="text-primary text-lg xs:text-2xl leading-relaxed mb-3 sm:mb-5">${product.price} <span className="text-gray-500"><del>${discountprice}</del></span></h6>
                    {/* Reviews Section */}
                    <div>
                        <div className="inline-flex gap-x-1.5 mr-3">
                            {
                                Array(rate).fill().map((_, id) => <FaStar key={id} className="text-accent text-base leading-none" />)
                            }

                            {
                                Array(5 - rate).fill().map((_, id) => <FaStar key={id} className="text-gray-300 text-base leading-none" />)
                            }
                        </div>
                        <span className="text-sm md:text-base leading-none text-gray-400 font-normal">( {product.rating.count} Customer Review )</span>
                    </div>

                    {/* Product Colors */}
                    <div className="flex items-center mt-3 md:mt-7">
                        <span className="sm:text-lg leading-relaxed font-semibold text-gray-800 inline-block mr-4">Color:</span>
                        <div>
                            {
                                props.variable ? product.colorHex.map((color, id) => {
                                    return <button key={id} className={`w-7 h-7 rounded-full mr-2 border border-gray-300`} style={{ background: 'red' }}></button>
                                }) : 'No Colors'
                            }
                        </div>
                    </div>
                    {/* Product Size */}
                    <div className="flex items-center mt-3 mb-4">
                        <span className="sm:text-lg leading-relaxed font-semibold text-gray-800 inline-block min-w-[70px]">Size:</span>
                        <div>
                            {
                                props.variable ? product.size.map((size, id) => {
                                    return <button key={id} className={`w-7  mr-2 text-base text-gray-800 uppercase font-semi-bold`}>{size}</button>
                                }) : 'No Size'
                            }
                        </div>
                    </div>

                    {/* Drescription section */}
                    <p className="text-base leading-relaxed text-gray-400 font-normal mb-7">{product.description}</p>

                    {/* Button Section */}
                    <div className="flex gap-x-2 sm:gap-x-2.5 mb-7">
                        {/* Cart Item Counter */}
                        <div className="w-20 xs:w-24 h-12 rounded-sm bg-gray-800 flex items-center justify-between px-2">
                            <button onClick={() => count <= 0 ? null : dispatch(decrementQuantity(cartItem.id)) } type="button" className="text-white text-lg leading-5 font-medium">-</button>
                            <div className="border-0 bg-transparent text-sm leading-relaxed text-white text-center font-normal focus:outline-none w-1/2">
                                {count}                            
                            </div>
                            <button onClick={() => count <= 0 ? null : dispatch(incrementQuantity(cartItem.id)) } type="button" className="text-white text-lg leading-5 font-medium">+</button>
                        </div>

                        {/* Add to cart button section */}
                        <button onClick={addCartHandler} className="px-2.5 sm:px-8 rounded-sm h-12 bg-primary text-white font-semibold text-[12px] sm:text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
                        <button className="w-12 h-12 rounded-sm center-child bg-gray-800 text-white text-lg hover:bg-black trns-1"><FaRegHeart /></button>
                    </div>

                    {/* info section */}
                    <p className="text-base leading-relaxed text-tGreay-200 font-semibold">SKU <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.sku}</span></p>
                    <p className="text-base leading-relaxed text-tGreay-200 font-semibold my-2.5">Categories: <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.category}</span></p>

                    {/* Share */}
                    <div>
                        <span className="text-base leading-relaxed text-black font-semibold">Share</span>
                        <div className="inline-flex gap-x-5 pl-6">
                            <a href="#" className="text-gray-500 hover:text-primary"><FaFacebookF /></a>
                            <a href="#" className="text-gray-500 hover:text-primary"><FaTwitter /></a>
                            <a href="#" className="text-gray-500 hover:text-primary"><FaGoogle /></a>
                            <a href="#" className="text-gray-500 hover:text-primary"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={500} theme={'dark'}/>
        </div>
    )
}

export default ProductDetailsCard;
