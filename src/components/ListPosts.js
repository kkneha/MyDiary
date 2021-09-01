import React, {useEffect, useState} from 'react'

export default function ListPosts() {
    const [postList,setPostList] = useState([])
    // const baseURL = 'http://127.0.0.1:8000/post/'
    const baseURL = 'https://p-diary.herokuapp.com/post/'
    
    useEffect(() => {                   // useEffect -> loading the data once per refresh
        fetch(baseURL + 'get-posts/')   // fecth data from server at the given endpoint
        .then(response => {
            if(response.ok) {
                return response.json()  // code 200 then convert to json format
            }
            throw response              // error code 404 or 500 throw error
        })
        .then(data => {
            setPostList(data)           // stores the data recieved from server to list
        })
    },[])

    return (
        <div>
            {postList && (postList.map((data,index) => {
                console.log(postList)
                return <h1 key={index}>{data['fields']['title']}</h1>
            }))}
        </div>
    )
}
