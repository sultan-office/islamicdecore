import Link from 'next/link'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

// Deals image
import deals_img from '../../../public/images/best-deals/deals-img.png'
import Image from 'next/image';

function BestDeals(props) {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<button type="button" class=" ${className} slider-dots"></button>`
        },
        el: ".bestDealsDots",
        type: 'bullets',


    }
    return (
        <>
            <section className="pt-8">
                <div className="container">
                    <div className="border bg-white shadow-sm">
                        <div className="sm:flex items-center justify-between py-3 px-5 border-b-2 border-gray-300">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <h2 className="section-title pr-16">Deals Of The Day</h2>
                                {/* Countdown Section */}
                                <div className="flex items-center mt-5 md:mt-0">
                                    <span>Ends after: </span>
                                    <div className="bg-primary inline-flex ml-3 text-white">
                                        <div className="w-[50px] text-white center-child">
                                            <span>07</span>h
                                        </div> :
                                        <div className="w-[50px] text-white center-child">
                                            <span>38</span>m
                                        </div> :
                                        <div className="w-[50px] text-white center-child">
                                            <span>38</span>s
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-black text-right mt-3 sm:mt-0">
                                <Link href="/about">
                                    View All
                                </Link>
                            </div>
                        </div>

                        {/* Card Section */}
                        <div className="mt-8 p-5 pt-0 group-btn relative">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={18}
                                pagination={pagination}
                                modules={[Pagination, Navigation]}
                                className="testimoniaSwiper"
                                navigation={{
                                    nextEl: '.nextSlide',
                                    prevEl: '.prevSlide',
                                }}

                                breakpoints={{

                                    460: {
                                        slidesPerView: 2,
                                        spaceBetween: 18,
                                    },


                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },

                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 24,
                                    },

                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 24,
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
                            {/* Button Section */}
                            <button className="trns-1 absolute w-10 h-10 rounded-full center-child left-0  top-1/2 -translate-y-1/2 -mt-5 text-gray-400 z-30 hover:bg-primary hover:text-white prevSlide">
                                <BsChevronLeft className="text-xl" />
                            </button>
                            <button className="trns-1 absolute w-10 h-10 rounded-full center-child right-0  top-1/2 -translate-y-1/2 -mt-5 text-gray-400 z-30 hover:bg-primary hover:text-white nextSlide">
                                <BsChevronRight className="text-xl" />
                            </button>

                            <div className="flex justify-center gap-x-2 bestDealsDots mt-7 mb-8 ">

                            </div>
                        </div>

                        {/* Banner Image */}

                    </div>
                    <div>
                        <Image src={deals_img} alt="deals-img" width={1000} height={200} className="w-full max-h-full" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestDeals