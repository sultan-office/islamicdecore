import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { footerNavInformation,footerNavCompany,footerNavshop } from "./FooterData"
import Copyright from "./Copyright"

function Footer() {
    return (
        <>
            <section className="py-12 mt-10">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-81/2 lg:w-4/12">
                            <h6 className="footer-title">Contact US</h6>
                            <div>
                                <span className="tex-sm text-gray-400">Call us 9am-11pm (Everyday)</span>
                                <p className="text-2xl text-accent">09678-300400 </p>
                                <p className="text-primary">Free Call any Time</p>
                                <div className="mt-4 text-gray-400 text-sm leading-relaxed">

                                    <p>Shop & Display Center Address: </p>
                                    <address>
                                        G3, Ground Floor, House# 307,
                                        Elephant Road,<br /> Pubali Bank Building,
                                        Dhaka-1205.
                                        Bangladesh
                                    </address>
                                    <p>(Everyday 9am-11pm)</p>
                                    <p>Mail us: info@islamicdecore.com</p>

                                </div>
                                <div className="mt-4">
                                    <a href="#" className="text-xl mr-3 inline-block text-primary"><FaFacebookF /></a>
                                    <a href="#" className="text-xl mr-3 inline-block text-primary"><FaLinkedinIn /></a>
                                    <a href="#" className="text-xl mr-3 inline-block text-primary"><FaInstagram /></a>
                                    <a href="#" className="text-xl mr-3 inline-block text-primary"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 lg:pl-6 xl:pl-10">
                            <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-x-8">
                                <div className="mt-10 lg:mt-0">
                                    <h6 className="footer-title">Information</h6>
                                    <ul>
                                        {
                                            footerNavInformation.map((list, index) => {
                                                return (
                                                    <li className="py-0.5" key={index}>
                                                        <Link href={list.url}>
                                                            <span className="footer-link">{list.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <h6 className="footer-title">Company</h6>
                                    <ul>
                                        {
                                            footerNavCompany.map((list, index) => {
                                                return (
                                                    <li className="py-0.5" key={index}>
                                                        <Link href={list.url}>
                                                            <span className="footer-link">{list.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <h6 className="footer-title">Shop</h6>
                                    <ul>
                                        {
                                            footerNavshop.map((list, index) => {
                                                return (
                                                    <li className="py-0.5" key={index}>
                                                        <Link href={list.url}>
                                                            <span className="footer-link">{list.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Copyright />
            </section>
        </>
    )
}

export default Footer