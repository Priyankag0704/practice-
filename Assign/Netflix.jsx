import React from "react"
import STYLE from "./netflix.module.css"
const Netflix=()=>{
    return(
        <div className={STYLE.main}>
            <div>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
            </div>
            <div>
                <img src="http://cdn.onlinewebfonts.com/svg/img_456268.png" alt="search" />
            </div>
            <div className={STYLE.menublock}>
                <ul>
                    <li>
                        <a href="a">Home</a>
                    </li>
                    <li>
                        <a href="a">About</a>
                    </li>
                    <li>
                        <a href="a">Services</a>
                    </li>
                    <li>
                        <a href="a">Movies</a>
                    </li>
                    <li>
                        <a href="a">Contact</a>
                    </li>
                    <li>
                        <button>Sign Up</button>
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
export default Netflix