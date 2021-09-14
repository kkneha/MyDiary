import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons'
import "../css/NavBar.css"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="left">
                <FontAwesomeIcon icon={faBook} className="book-icon"/>            
                <h3 className="header">My Journal</h3>
            </div>
            <div className="right">
                <button className="create-btn"><FontAwesomeIcon icon={faPlus} className="plus-icon"/>  Create Post</button>
            </div>
        </div>
    )
}
