import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import SinglePost from "./SinglePost";
import "../css/Pagination.css";


export default function ListPosts() {
  const [postList, setPostList] = useState([]);
  const [pageNo,setPageNo] = useState([1])
  // const baseURL = 'http://127.0.0.1:8000/post/'
  const baseURL = "https://p-diary.herokuapp.com/post/";
  const [currentPage,setCurrentPage] = useState(1)

  var pageList = []

  useEffect(() => {
    // useEffect -> loading the data once per refresh
    fetch(baseURL + "get-posts/" + currentPage.toString() + "/") // fecth data from server at the given endpoint
      .then((response) => {
        if (response.ok) {
          return response.json(); // code 200 then convert to json format
        }
        throw response; // error code 404 or 500 throw error
      })
      .then((data) => {
        setPostList(data); // stores the data recieved from server to list
      });
  },[currentPage]);

  useEffect(() => {
    // useEffect -> loading the data once per refresh
    fetch(baseURL + "get-pgno/") // fecth data from server at the given endpoint
      .then((response) => {
        if (response.ok) {
          return response.json(); // code 200 then convert to json format
        }
        throw response; // error code 404 or 500 throw error
      })
      .then((data) => {
        var totalPages = data['count']
        for(let i = 1; i <= totalPages; i++) {
          pageList.push(i)
        }
        setPageNo(pageList)
        console.log(pageNo) // stores the data recieved from server to list
      });
  }, []);

  
  return (
    <div>
      {postList &&
        postList.reverse().map((data, index) => {
          return <SinglePost key={index} data={data} />;
        })}
       <div className='page-nos-wrapper'>
      <div className='prev'>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </div>
      <div className='page-no'>
        {pageNo.map((data,index) => {
          return <div key={index} className='nos' onClick={(e) => {
            console.log(data)
            setCurrentPage(data);
          }}>{data}</div>
        })}
      </div>
      <div className='next'>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </div>
    </div>
    </div>
  );
}
