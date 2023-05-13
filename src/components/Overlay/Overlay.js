
import { useEffect } from "react"

function Overlay(props) {

    const showOverlay = props.showOverlay
    useEffect(() => {
        if(showOverlay){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }
    })
  return (
    <div className={`fixed bg-[rgba(0,0,0,0.7)] w-full h-full top-0 bottom-0 left-0 right-0 z-[100] ${props.zIndex} ${showOverlay ? 'block' : 'hidden'}`}>

    </div>
  )
}

Overlay.defaultProps = {
    showOverlay : false
}

export default Overlay