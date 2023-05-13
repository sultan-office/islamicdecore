import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import {BiPhoneCall, BiEnvelopeOpen } from 'react-icons/bi'

function contact() {
    const notify = () => toast("Your Message Has Sent!");
  return (
   <>
   <Breadcrumb pages={['contact']}/>
     <section className="py-24">
        <div className="container">
            <div className="grid gap-y-20 lg:grid-cols-2 gap-6 xl:gap-10 items-start">
                {/* Address Section */}
                <div>
                    <div className="grid sm:grid-cols-2 gap-5 ">
                        <div className="bg-green-100 rounded-md py-7 text-center">
                            <div className='w-10 h-10 border-2 border-accent center-child rounded-full mx-auto'>
                                <BiPhoneCall className="text-xl text-accent"/>
                            </div>
                            <span className="inline-block xl:pt-4 py-2 xl:pb-3 text-xl xl:text-2xl font-semibold">Phone:</span>
                            <p className="text-lg font-medium mb-1">
                                <a href="tel: ">+(323) 9847 3847 383</a>
                            </p>
                        </div>
                        <div className="bg-blue-100 rounded-md py-7 text-center">
                            <div className='w-10 h-10 border-2 border-accent center-child rounded-full mx-auto'>
                                <BiEnvelopeOpen className="text-xl text-accent"/>
                            </div>
                            <span className="inline-block xl:pt-4 py-2 xl:pb-3 text-xl xl:text-2xl font-semibold">Email:</span>
                            <p className="text-base xl:text-lg font-medium mb-1">
                                <a href="tel: ">example@domain.com</a>
                            </p>
                        </div>
                    </div>
                    {/* Address */}
                    <div className="bg-orange-100 rounded-md mt-6 p-7">
                        <div>
                            <div className='w-10 h-10 border-2 border-accent center-child rounded-full'>
                                <BiEnvelopeOpen className="text-xl text-accent"/>
                            </div>
                            <span className="inline-block xl:pt-4 py-2 xl:pb-3 text-xl xl:text-2xl font-semibold">Address</span>
                            <p className="text-base font-medium mb-1">
                            4517 Washington Ave. Manchester, Road 2342, Kentucky 39495
                            </p>
                        </div>
                        {/* Maps Section */}
                        <div className="mt-5">
                            <iframe className="border-2 border-gray-500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.56568677304!2d-74.26445659542364!3d40.73138423846403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1683473797560!5m2!1sen!2sbd" width="600" height="180" style={{border:2, maxWidth : '100%', width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                </div>
                {/* Contact Section  */}
                <div>
                    <div className="w-11/12 mx-auto sm:py-10 p-5 sm:px-8 shadow-sm bg-white sm:shadow-lg">
                            <h6 className="text-2xl font-medium pb-2 border-b-2 border-gray-200 mb-7">Get In Touch</h6>
                            <div>
                                <form onChange={(e) => e.preventDefault()} required>
                                    <div>
                                        <label htmlFor="Name" className="block mb-1 text-lg text-gray-600">Name *</label>
                                        <input type="text" id="name" className="form-input" required/>
                                    </div>
                                    <div className="mt-7">
                                        <label htmlFor="email" className="block mb-1 text-lg text-gray-600">Email *</label>
                                        <input type="email" id="email" className="form-input" required/>
                                    </div>
                                    <div className="mt-7">
                                        <label htmlFor="message" className="block mb-1 text-lg text-gray-600">Messages *</label>
                                        <textarea type="text"  id="message" className="form-input h-40" required/>
                                    </div>
                                    <button onClick={notify} type='submit' className="text-white bg-black mt-7 py-4 w-full text-center">
                                        Send Now
                                        <ToastContainer />
                                    </button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>

  )
}

export default contact