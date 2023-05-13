import Image from "next/image"
import paymentsImg from '../../../public/images/footer/payments-method.png'

function Copyright() {
  return (
    <>
        <div className="border-t py-5 mt-14">
            <div className="text-center">
                <div>
                    <p className="text- mt-4 mb-2 text-gray-400">Payments By: </p>
                    <div>
                        <Image src={paymentsImg} alt="payment-img" className="w-[150px] mx-auto"/>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-5">© 2014-2022 BDSHOP.COM. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Copyright