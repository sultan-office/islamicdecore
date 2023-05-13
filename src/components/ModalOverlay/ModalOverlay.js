import { useEffect } from "react"

function ModalOverlay(props) {

    const showOverlay = props.showModalOverlay
    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    })

    return (
        <>
            <div className={`fixed w-full duration-500 trns-1 h-full top-0 bottom-0 left-0 right-0 z-40 ${showOverlay ? 'visible bg-[rgba(0,0,0,0.7)] scale-100' : 'invisible scale-0 bg-[rgba(0,0,0,1)]'}`}>

            </div>
        </>
    )
}
export default ModalOverlay