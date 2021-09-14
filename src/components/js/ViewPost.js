import React from 'react'
import { useLocation } from 'react-router';
import "../css/ViewPost.css"

export default function ViewPost() {
    const data = useLocation().state.data;

    return (
        <section className="view-post">
            <h2 className="view-post-title">{data["fields"]["title"]}</h2>
            <h5 className="view-post-date">{data["fields"]["createdOn"]}</h5>
            <p className="view-post-body">{data["fields"]["body"]}</p>
        </section>
    )
}
