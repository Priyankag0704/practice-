import React from 'react'
import STYLE from "./jspider.module.css"

const Jspider = () => {
  return (
    <>
    <div id={STYLE.main}> 
      <div>
        <img id={STYLE.image} src="https://jspiders.com/_nuxt/img/logo_jspiders.3b552d0.png" alt="" />
      </div>
  
      <div>
       
        <ul id={STYLE.menu}>
 
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Courses</a>
            </li>
            <li>
                <a href="">Batches</a>
            </li>
            <li>
               <a href="">corporates</a>
            </li>
            <li>
                 <a href="">contact</a>
            </li>
            <li>
                <a href="  placements">  placements</a>
            </li>
            <li>
                <a href="Enquiry"></a>
            </li>
            <li>
                <a href="">+919686800700</a>
            </li>
            <li>
                <a href="">+918951965839</a>
            </li>
            <li>
                <a href="">+918951965086</a>
            </li>
        </ul>
    
        
       
        </div>
      </div>
    
    </>
  )
}

export default Jspider