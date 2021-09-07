import React from 'react'
import "../css/SinglePost.css"

export default function SinglePost({data}) {
    
    const months = ["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"]; 

    var currentMonth = months[parseInt(data['createdOn'].toString().slice(5, 7))-1]
    var currentDate = data['createdOn'].toString().slice(8,10)
    var currentYear = data['createdOn'].toString().slice(0,4)
    
    return (
        <div className="post">
            <h4 className="date">{currentDate} {currentMonth} {currentYear}</h4>
            <h3 className="title">{data['title']}</h3>
            <p className="body">
                {data['body'].slice(0, 10)}....
            </p>
        </div>
    )
}
