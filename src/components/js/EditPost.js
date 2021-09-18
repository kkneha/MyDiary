import React, { useState } from "react";
import "../css/EditPost.css";
import { useLocation } from "react-router";

export default function EditPost() {
  var data = useLocation().state.data;
  const [title, setTitle] = useState(data["fields"]["title"]);
  const [body, setBody] = useState(data["fields"]["body"]);

  return (
    <div>
      <form className='edit-form'>
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
      {/*             {done && (
                <h1>updated</h1>
            )} */}
    </div>
  );
}
