import React from 'react'
import "../css/Popup.css"
import { Link } from 'react-router-dom'

export default function Popup() {
    const wrapper = document.getElementsByClassName("wrapper"); 
    for(var i = 0; i< wrapper.length; i++){
        wrapper[i].classList.add("darken");
    }   

    function removeBlur(){
        for(i = 0; i< wrapper.length; i++){
        wrapper[i].classList.remove("darken");
        }   
    }

    return (
        <div className="popup-wrapper">
        <div className="popup-box">
            <div className="box">
                <h2 className="popup-text">Done!</h2>
                <Link to="/">
                    <button className="popup-btn" onClick={removeBlur}>Okay</button>
                </Link>
            </div>
        </div>
        </div>
    )
    
}
