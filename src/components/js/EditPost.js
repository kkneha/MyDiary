import React, { useState } from "react";
import "../css/EditPost.css";
import { useLocation } from "react-router";
import Popup from "./Popup";

export default function EditPost() {
  const data = useLocation().state.data;
  const pk = data['pk']
  const [title, setTitle] = useState(data["fields"]["title"]);
  const [body, setBody] = useState(data["fields"]["body"]);
  const [date, setDate] = useState(data["fields"]["createdOn"])
  const [done,setDone] = useState(false)

  const baseURL = 'https://p-diary.herokuapp.com/post/';

  const handleSubmit = (e) => {
    e.preventDefault();
    var post = {'title':title,'body':body, 'createdOn':date}
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(post)
    }
    fetch(baseURL + 'edit/' + pk + "/",requestOptions).then(async response => {
        // console.log(response.json())
        const data = await response.json()
        setDone(data)
    })
  } 
  return (
    <div>
      <form className='edit-form wrapper' onSubmit={handleSubmit}>
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
        <label for='date' className='labels'>
          Date
        </label>
        <input
          name='date'
          placeholder='Type Something that describes your day!'
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}></input>
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
      {done && <Popup       
            />}
    </div>
  );
}
