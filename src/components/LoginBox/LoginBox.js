import React, { memo } from 'react'
import Link from 'next/link'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'


function LoginBox(props) {
    return (
        <>

            <div>
                <ModalOverlay showModalOverlay={props.showLoginBox} />
                <div className={` w-[320px] md:w-[400px] fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 trns-1 duration-500 ${props.showLoginBox ? 'top-1/2 visible opacity-100' : 'top-0 invisible opacity-0'}`}>
                    <div className="bg-primary px-5 md:px-8 py-3.5 flex justify-between items-center">
                        <h6 className="text-white text-xl">Login</h6>
                        <button type="button" onClick={() => props.LoginBoxHandler(false)}>
                            <AiOutlineClose className="text-white text-2xl" />
                        </button>
                    </div>
                    <div className="px-5 md:px-8 py-7 md:py-10">
                        <div>
                            <input type="Email" placeholder="Email" className="form-input mb-5" />
                            <input type="password" placeholder="Password" className="form-input" />
                            <button type="submit" className="bg-accent py-3 text-center w-full mt-6">Login</button>
                        </div>
                        <div className="text-right pt-2 pb-6">
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
                        {/* Social Media login*/}
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
        </>
    )
}

export default LoginBox