import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons'
import "../css/NavBar.css"
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/">
            <div className="left">
                <FontAwesomeIcon icon={faBook} className="book-icon"/>            
                <h3 className="header">My Journal</h3>
            </div>
            </Link>
                <div className="right">
                <Link to="/create">
                    <button className="create-btn"><FontAwesomeIcon icon={faPlus} className="plus-icon"/>  Create Post</button>
                </Link>
            </div>
        </div>
    )
}
