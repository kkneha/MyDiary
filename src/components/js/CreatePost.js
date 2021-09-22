import React,{useState} from 'react'
import "../css/CreatePost.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import Popup from './Popup'

export default function CreatePost() {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [done,setDone] = useState(false)

    // const baseURL = 'http://127.0.0.1:8000/post/'
    const baseURL = 'https://p-diary.herokuapp.com/post/'

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle('')
        setBody('')
        var post = {'title':title,'body':body}
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(post)
        }
        fetch(baseURL + 'create/',requestOptions).then(async response => {
            const data = await response.json()
            setDone(data)
        })
    } 

    return (
        <div>
            <form className="create-form wrapper" onSubmit={handleSubmit}>
                <h2 className="form-title"><FontAwesomeIcon className="pen-icon" icon={faPenAlt} className="icon"/> My Day</h2>
                <input 
                  placeholder="Type Something that describes your day!"
                  type="text"
                  required
                  onChange={e => {
                    setTitle(e.target.value)
                }}
                ></input>
                <textarea
                  placeholder="Get Started with your day!" 
                  type="text"
                  required
                  onChange={e => {
                      setBody(e.target.value)
                  }}
                ></textarea>
                <button className="post-btn" onClick={Popup.blurbackground}>Post</button>
            </form>
            {done && <Popup      
            />}
        </div>
    )
}
