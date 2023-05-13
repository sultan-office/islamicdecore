import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Link from "next/link"
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { FiRefreshCcw } from 'react-icons/fi'

function login() {
    return (
        <>  
        <Breadcrumb pages={['login']}/>
            <section className="py-20 bg-gray-100">
            <div className="container">
            <div className="w-full md:w-[600px] bg-white mx-auto shadow-md ">
                    <div className="bg-gray-800 px-5 md:px-8 py-3.5 flex justify-between items-center">
                        <h6 className="text-white text-xl">Login</h6>
                    </div>
                    <div className="px-5 md:px-8 py-7 md:py-10">
                        <div>
                            <input type="Email" placeholder="Email" className="form-input mb-5" />
                            <input type="password" placeholder="Password" className="form-input" />
                            <button type="submit" className="bg-accent py-3 text-center w-full mt-6">Login</button>
                        </div>
                        <div className="text-right pt-4 pb-8">
                            <Link href="#" className="text-sm text-blue-500 underline"> Forgot Password</Link>
                        </div>
                        <div className='text-center pt-1 pb-2'>
                            <Link href="/register" className="text-sm hover:text-blue-500 hover:underline">Create New Account?</Link>
                        </div>
                        <div className="flex items-center">
                            <span className="block w-full h-px bg-gray-200"></span>
                            <span className="inline-block px-3 text-xl leading-none">OR</span>
                            <span className="block w-full h-px bg-gray-200"></span>
                        </div>
                        {/* Social Media */}
                        <div>
                            <div className="mt-5">
                                <Link href="/" className="flex items-center rounded-sm overflow-hidden">
                                    <div className="center-child w-12 h-12 bg-blue-950">
                                        <FaFacebookF className="text-white" />
                                    </div>
                                    <div className="bg-blue-900 h-12 flex items-center w-full px-4 text-white">
                                        <span>Sign With Facebook</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-3">
                                <Link href="/" className="flex items-center rounded-sm overflow-hidden">
                                    <div className="center-child w-12 h-12 bg-rose-950">
                                        <FaGoogle className="text-white" />
                                    </div>
                                    <div className="bg-rose-900 h-12 flex items-center w-full px-4 text-white">
                                        <span>Sign With Google</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default login