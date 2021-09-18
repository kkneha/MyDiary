import React, { useState } from "react";
import "../css/EditPost.css";
import { useLocation } from "react-router";

export default function EditPost() {
  const data = useLocation().state.data;
  const pk = data['pk']
  const [title, setTitle] = useState(data["fields"]["title"]);
  const [body, setBody] = useState(data["fields"]["body"]);
  const [done,setDone] = useState(false)

  const baseURL = 'https://p-diary.herokuapp.com/post/';

  const handleSubmit = (e) => {
    e.preventDefault();
    var post = {'title':title,'body':body}
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(post)
    }
    fetch(baseURL + 'edit/' + pk + "/",requestOptions).then(async response => {
        console.log(response.json())
    })
  } 
  return (
    <div>
      <form className='edit-form' onSubmit={handleSubmit}>
        <h2 className='edit-title'>Edit Form</h2>
        <label for='title' className='labels'>
          Title
        </label>
        <input
          name='title'
          placeholder='Type Something that describes your day!'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}></input>

        <label for='body' className='labels'>
          Content
        </label>

        <textarea
          name='body'
          placeholder='Get Started with your day!'
          type='text'
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <button className='edit-btn'>Update</button>
      </form>
      {done && (
        alert("Updated"))}
    </div>
  );
}
