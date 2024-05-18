import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allBlogs = blogs.map((v, i) => {
        return (
            <div className='blogItems' key={i}>
                <h2> {v.title}</h2>
                <p>
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
    return (
        <div>
            <Header />
            <h1>Blog Page</h1>
            <div className='container'>
                {allBlogs}
            </div>

        </div>
    )
}
