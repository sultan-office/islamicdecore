import SideNav from "@/components/SideNav/SideNav"
import Image from "next/image"

// Images
import heroImg1 from '../../../public/images/hero/hero-img-1.png'
import heroImg2 from '../../../public/images/hero/hero-img-2.jpeg'
import heroImg3 from '../../../public/images/hero/hero-img-3.png'
import heroImg4 from '../../../public/images/hero/hero-img-4.png'
import heroImg5 from '../../../public/images/hero/hero-img-5.png'
import heroImg6 from '../../../public/images/hero/hero-img-6.png'
import heroImg7 from '../../../public/images/hero/hero-img-7.png'


function Hero() {
    return (
        <>
            <section className="pt-8">
                <div className="container">
                    <div className="flex gap-x-px">
                        {/* Side Navbar */}
                        <div className="hidden lg:block lg:w-3/12">
                            <div className="bg-white border border-gray-200 h-full">
                                <SideNav />
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-9/12">
                            <div className="sm:flex flex-wrap">
                                <div className="sm:w-7/12">
                                    <Image src={heroImg1} alt="hero Image" className="w-full" />
                                </div>
                                <div className="sm:w-5/12 flex flex-wrap items-stretch">
                                    <div className="w-1/2" >
                                        <Image src={heroImg2} alt="hero image" className="w-full h-full" />
                                    </div>
                                    <div className="w-1/2" >
                                        <Image src={heroImg3} alt="hero image" className="w-full h-full" />
                                    </div>
                                    <div className="w-full">
                                        <Image src={heroImg4} alt="hero image" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex">
                                <div className="sm:w-7/12">
                                    <Image src={heroImg5} alt="hero Image" className="max-full" />
                                </div>
                                <div className="sm:w-5/12 flex flex-wrap items-stretch">
                                    <div className="w-1/2" >
                                        <Image src={heroImg6} alt="hero image" className="w-full h-full" />
                                    </div>
                                    <div className="w-1/2" >
                                        <Image src={heroImg7} alt="hero image" className="w-full h-full" />
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

export default Hero