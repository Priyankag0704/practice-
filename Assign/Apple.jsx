import React from 'react'
import STYLE from "./apple.module.css"

const Apple = () => {
  return (
    <>
    <div id={STYLE.main}> 
      <div>
        <img id={STYLE.image} src="https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj" alt="" />
      </div>
  
      <div>
       
        <ul id={STYLE.menu}>
            <li>
                <select name="" id={STYLE.name}>
                    <option value="Tutorials">Tutorials</option>
                    <option value="Html">html</option>
                </select>
            </li>
            <li>
                <select name="" id={STYLE.name}>
                    <option value="Tutorials">References</option>
                    <option value="Html">html</option>
                </select>
            </li>
            <li>
                <select name="" id={STYLE.name}>
                    <option value="Tutorials">Exercise</option>
                    <option value="Html">html</option>
                </select>
            </li>
            <li>
                <a href="">Signup</a>
            </li>
            <li>
                <a href="">BootCamp</a>
            </li>
            <li>
                <a href="">pro</a>
            </li>
            <li>
               <a href="">Get certified</a>
            </li>
            <li>
                 <a href="">Create websites</a>
            </li>
            <li>
                <button>Login</button>
            </li>
        </ul>
    
        
       
        </div>
      </div>
    
    </>
  )
}

export default Apple