import React from 'react'
import "../css/Popup.css"
import {Link} from 'react-router-dom'

export default function Popup() {
    return (
        <div className="popup-wrapper">
        <div className="popup-box">
            <div className="box">
                <h5 className="popup-text">Done!</h5>
                <Link to="/">
                    <button className="popup-btn">Okay</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
