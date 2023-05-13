import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// Images 
import aboutImg from '../../public/images/about-us/about-img.png'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard"

function about() {
    return (
        <>
            <Breadcrumb pages={['about']} />
            <section>
                <div class="container">
                    <div class="w-full lg:flex items-center pb-10 lg:pb-0 gap-7 mt-20">
                        <div class="lg:w-1/2 xl:w-5/12 h-auto rounded overflow-hidden my-5 lg:my-0">
                            <Image src={aboutImg} alt="about" class="w-full h" />
                        </div>
                        <div class="mt-10 lg:mt-0 lg:w-1/2 xl:w-7/12">
                            <h1 class="font-medium text-black mb-3 text-xl sm:text-3xl">What is e-commerce business?</h1>
                            <p class="text-base text-gray-900 leading-7 mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                            <ul class="text-base text-gray-900 leading-7 list-disc ml-5 mb-7">
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                            <Link href="/contact" className="py-3 px-8 bg-accent">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* our Mission */}
            <section className="sm:py-10 mt-8 sm:mt-14 lg:mt-20 border-t-2 border-t-gray-200">
                <div class="container">
                    <div class="flex flex-col gap-y-10 lg:flex-row items-center pb-10 lg:pb-0 gap-7 mt-20">
                        <div class="w-full lg:w-1/2 xl:w-7/12 order-last lg:order-first">
                            <h1 class="font-medium text-qblack mb-3 text-xl sm:text-3xl">Our Mission?</h1>
                            <p class="text-base text-gray-800 leading-7 mb-3 text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp also the on leap into electronic typesetting.</p>
                            <p class="text-base text-gray-800 leading-7 pb-5 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard has survived not only five centuries but also the on leap into electronic typesetting.</p>

                            <Link href="/contact" className="py-3 px-8 inline-block bg-accent">
                                Contact Us
                            </Link>
                        </div>
                        <div class="w-full lg:w-1/2 xl:w-5/12 rounded overflow-hidden my-5 lg:my-0">
                            <Image src={aboutImg} alt="about" class="w-full" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonial Section */}
            <section className="py-14 bg-gray-100 mt-14">
                <div className="container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        freeMode={true}
                        modules={[Autoplay]}
                        speed={700}
                        autoplay={{
                            delay : 2000,                      
                            
                        }}
                        breakpoints={{
                            768 : {
                                slidesPerView : 2
                            },
                        }}
                    >
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default about