import React from 'react'
import "../css/Popup.css"
export default function Popup(typeFor) {
    function closePopup(){
        window.location.assign("/")
    }
    return (
        <div className="popup-wrapper">
        <div className="popup-box">
            <div className="box">
                <h5 className="popup-text">Done!</h5>
                <button className="popup-btn" onClick={closePopup}>Okay</button>
            </div>
        </div>
        </div>
    )
}
