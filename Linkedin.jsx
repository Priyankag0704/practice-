import React from 'react'
import STYLE from "./linkedin.module.css"

const Linkedin = () => {
  return (
    <>
    <div id={STYLE.main}> 
      <div>
        <img id={STYLE.image} src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" alt="" />
      </div>
  
      <div>
       
        <ul id={STYLE.menu}>
 
            <li>
                <a href="">Discover</a>
            </li>
            <li>
                <a href="">People</a>
            </li>
            <li>
                <a href="">Learning</a>
            </li>
            <li>
               <a href="">Goals</a>
            </li>
            <li>
                 <a href="">Join now</a>
            </li>
            <li>
              <button>Signin</button>
            </li>
         
         
        </ul>
    
        
       
        </div>
      </div>
    
    </>
  )
}

export default Linkedin