import React,{useState} from 'react'

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
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input 
                  type="text"
                  required
                  onChange={e => {
                    setTitle(e.target.value)
                  }}
                ></input>
                <label>body</label>
                <input 
                  type="text"
                  required
                  onChange={e => {
                      setBody(e.target.value)
                  }}
                ></input>
                <button>Post</button>
            </form>
            {done && (
                <h1>created</h1>
            )}
        </div>
    )
}
