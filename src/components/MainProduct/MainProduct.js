import ProductCard from "../ProductCard/ProductCard"
import Image from "next/image"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';

// images 
import productImage from '../../../public/images/main-product/banner-img.png'
import ProductMiniCard from "../ProductMiniCard/ProductMiniCard";
function MainProduct(props) {
    const recommendedProduct = props.product.slice(1, 8)
    return (
        <>
            <section className="py-8">
                <div className="container">
                    <div className="border bg-white shadow-sm">
                        <div className="md:flex items-center justify-between py-3 px-5 border-b-2 border-gray-300">
                            <h2 className="section-title mr-16">Consumer Electric</h2>
                            <ul className="flex flex-wrap items-center md:justify-end gap-3 md:gap-x-6 mt-4 md:mt-0">
                                {
                                    // Menu Section
                                    ['Electronics', 'Audios & Theaters', 'Camera', 'TV & Videos'].map((title, index) => (
                                        <li key={index} className="text-black text-sm hover:text-accent">{title}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Top Header Section */}
                        <div className="md:flex">
                            {/* Left Side */}
                            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-9/12">
                                {/* Banner Images */}
                                <div className="p-5">
                                    <Image src={productImage} alt="images" />
                                </div>
                                {/* Menu Item */}
                                <div className="px-5 border-b border-b-gray-400 pb-3.5 flex flex-wrap items-center justify-between">
                                    <ul className="flex gap-x-3 lg:gap-x-6">
                                        {
                                            ['New Arrivals', 'Best Selling', 'Sales'].map((title, index) => (
                                                <li className="text-gray-400 hover:text-black" key={index}>{title}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className="flex items-center gap-x-4 w-full sm:w-auto justify-end mt-3 sm:mt-0">
                                        <button className="slider-arrow text-black MainPrevSlide border-primary border"><BsChevronLeft /></button>
                                        <button className="slider-arrow text-black MainNextSlide border-primary border"><BsChevronRight /></button>
                                    </div>
                                </div>
                                {/* Card Section ========================*/}
                                <div className="mt-8 p-5 pt-0 group-btn relative">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={24}
                                        modules={[Navigation]}
                                        navigation={{
                                            nextEl: '.MainNextSlide',
                                            prevEl: '.MainPrevSlide',
                                        }}

                                        breakpoints={{
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 24
                                            },
                                            768: {
                                                slidesPerView: 1,
                                            },

                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 24
                                            },

                                            1200: {
                                                slidesPerView: 4,
                                            }
                                        }}


                                    >
                                        {
                                            props.product.map((data, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <ProductCard id={data.id} image={data.image} thumbnail={data.thumbnail} title={data.title} rating={data.rating} price={data.price} />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                            <div className="w-full mt-10 md:mt-0 md:w-5/12 lg:w-4/12 xl:w-3/12 border-l border-gray-200">
                                <div className="px-5 pb-5">
                                    <h5 className="text-black border-b border-gray-200 py-4">Recommended For You</h5>
                                    {/* Product List */}
                                    <div>
                                        {
                                            recommendedProduct.map((data, index) => {
                                                return (
                                                    <div key={index} className="mt-5 ">
                                                        <ProductMiniCard img={data.image} title={data.title} price={data.price} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainProduct