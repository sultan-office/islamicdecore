import React from 'react'

function CetagoryTitle(props) {
    return (
        <>
            <section className="pb-4">
                <div className="container">
                    <h4 className="section-title text-gray-800 py-3 text-right font-normal">{props.title}</h4>
                    <p className="text-gray-700 mt-4 text-sm leading-relaxed md:text-base">{props.description}</p>
                </div>
            </section>
        </>
    )
}

export default CetagoryTitle