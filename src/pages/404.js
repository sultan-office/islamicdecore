import Link from 'next/link'
import React from 'react'

function Custom404() {
  return (
    <section className="py-24 lg:py-20 xl:py-20 bg-gray-100">
        <div className="container">
            <h3 className="text-3xl text-center text-black">The page you are looking for was not found.</h3>
            <div className="w-full md:w-[500px] flex-col mx-auto center-child px-7 py-10 border border-gray-400 mt-10">
                <h6 className="text-base text-black font-bold">Sorry For The Inconvenience.</h6>
                <p className="text-tGreay-700 text-sm mt-3 mb-5">Search again what you are looking for</p>
                <Link href="/" className="text-base text-black inline-block font-bold underline">Go To Home </Link>
            </div>
        </div>
    </section>
  )
}

export default Custom404