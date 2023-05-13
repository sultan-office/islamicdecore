import Link from 'next/link'
import React from 'react'

function Breadcrumb(props) {
    return (
        <>
            <section className="py-2.5 bg-gray-200">
                <div className="container">
                    <ul className='flex '>
                        <li className="text-sm text-blue-400 last:text-black capitalize after:content-['/'] after:inline-block after:px-1.5 after:last:content-[none]" >
                            <Link href='/'>home</Link>
                        </li>
                            {
                                props.pages.map((title, index) => {
                                    return (
                                        <li ld={index.length} key={index} className="text-sm text-blue-400 last:text-black capitalize after:content-['/'] after:inline-block after:px-1.5 after:last:content-[none]" key={index}>
                                            
                                            {index === title.length - 1? <span>{'bakhor'}</span> : <Link href={title}>{title}</Link>}
                                            
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb