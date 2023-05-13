
import { useEffect } from "react";
import QuickView from "../QuickView/QuickView"


// Redux Features
import { useSelector} from 'react-redux';


function Portal() {
    const productData = useSelector((state) => state.quickView);

    useEffect(() => {
      if(productData.show){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "unset"

      }
    })

  return (
    <>
        
        {
          productData.show ? <QuickView product={productData.data}/> : undefined
        }
    </>
  )
}

export default Portal