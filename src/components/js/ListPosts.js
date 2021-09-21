import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import SinglePost from "./SinglePost";

export default function ListPosts() {
  const [postList, setPostList] = useState([]);
  // const baseURL = 'http://127.0.0.1:8000/post/'
  const baseURL = "https://p-diary.herokuapp.com/post/";

  useEffect(() => {
    // useEffect -> loading the data once per refresh
    fetch(baseURL + "get-posts/" + "1") // fecth data from server at the given endpoint
      .then((response) => {
        if (response.ok) {
          return response.json(); // code 200 then convert to json format
        }
        throw response; // error code 404 or 500 throw error
      })
      .then((data) => {
        setPostList(data); // stores the data recieved from server to list
      });
  }, []);
  
  return (
    <div>
      {postList &&
        postList.reverse().map((data, index) => {
          return <SinglePost key={index} data={data} />;
        })}
       <Pagination totalPages={2}/>
    </div>
  );
}
