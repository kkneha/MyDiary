import React from "react";
import "../css/SinglePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import ViewPost from "./ViewPost";

export default function SinglePost({ data }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var currentMonth = months[parseInt(data["fields"]["createdOn"].toString().slice(5, 7)) - 1];
  var currentDate = data["fields"]["createdOn"].toString().slice(8, 10);
  var currentYear = data["fields"]["createdOn"].toString().slice(0, 4);

  return (
    <Link to={{
        pathname:"/view",
        state:{
            data:data
        }
      }}>
      <div className='post'>
        <div className='top-icons'>
          <FontAwesomeIcon icon={faEdit} id='edit-btn' className='post-icons' />
          <FontAwesomeIcon icon={faTrash} id='del-btn' className='post-icons' />
        </div>
        <h4 className='date'>
          {currentDate} {currentMonth} {currentYear}
        </h4>
        <h3 className='title'>{data["fields"]["title"]}</h3>
        <p className='body'>{data["fields"]["body"].slice(0, 10)}....</p>
      </div>
    </Link>
  );
}
