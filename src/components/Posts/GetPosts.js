import React, { useEffect, useState } from 'react'
import { POSTS_API } from '../Posts-API/PostsApi'

const GetPosts = () => {

    const [posts, setGetPosts] = useState([])



    useEffect(() => {
        fetch(POSTS_API)
        .then(response => response.json())
        .then(data => setGetPosts(data))
        .catch(err => console.log(err))
    }, [])
    
    console.log(posts.title)

    const post_prop = posts.map((item, index) => {
        return (
            <div key={index}>
            <p>{item.title}</p>
        </div>
        )
    }

    )
  return (
    <div>
      Render data here
      {post_prop}
    </div>
  )
}

export default GetPosts
