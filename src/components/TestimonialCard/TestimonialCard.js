import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'


function TestimonialCard(props) {
    const rate = 4
    return (
        <>
            <div className="bg-white  py-8 px-7">
                <div className="flex gap-x-1.5 mb-5">
                    {
                        Array(rate).fill().map((_, id) => <AiFillStar key={id} className="text-sm text-accent" />)
                    }
                    {
                        Array(5 - rate).fill().map((_, id) => <AiFillStar key={id} className="text-sm text-gray-300" />)
                    }
                </div>
                <p className="text-base lg:text-lg leading-relaxed text-gray-400 text-justify italic">has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                <div className="mt-10 flex items-center">
                    <div className="basis-[56px] border">

                    </div>
                    <div className="pl-5 lg:pl-25px flex-[5]">
                        <h6 className="text-black text-lg font-medium mb-0">jhon doe</h6>
                        <span className="text-sm leading-none text-gray-300">ceo</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard