
"use client"

import { useState } from "react"

export default function Cart({children}){
       
    const [isVisible, setIsVisible] = useState(false)

    function handleCartVisibility(){
        setIsVisible((prevState) => !prevState); 
    }
      return(
       <div>
             <button onClick={handleCartVisibility}>
                {isVisible ? 'Hide Cart' : 'Show Cart'}
             </button>
             {isVisible && <ul>{children}</ul>}
       </div>
      )
}
