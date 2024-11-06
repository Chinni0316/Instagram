import React from "react"
import "../styles/sidebar.css"
const SideBar=()=>{
    const menuItem=["Home","Explore","Reels","Message","Profile"];

    return(
        <>
          <div className="sidebar"> 
            {menuItem.map((item,index)=>{
                return(
                    <div key={index} className="menu-item">
                     {item}   
                    </div>
                )
            })}

          </div>
        </>
    )
 }
 export default SideBar;
