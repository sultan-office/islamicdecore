import Image from 'next/image'
import { FaStar } from 'react-icons/fa'


function ReviewCard() {
    const rate = 3
    return (
        <>

            <article>
                <div className="flex items-center mb-4">
                    <div className="w-14 center-child overflow-hidden mr-5 h-14 rounded-full border border-gray-300">
                    </div>
                    <div>
                        <h6>Jhon Doe</h6>
                        <p><time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                        <div className="mt-1">

                            {
                                Array(rate).fill().map((_, index) => (
                                    <FaStar key={index} className="text-accent inline-block mr-0.5 text-xs" />
                                ))
                            }

                            {
                                Array(5 - rate).fill().map((_, index) => (
                                    <FaStar key={index} className="text-gray-300 inline-block mr-0.5 text-xs" />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p className="mb-2 text-gray-500 dark:text-gray-700">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
            </article>

        </>
    )
}

export default ReviewCard