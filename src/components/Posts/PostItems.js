import React, { useState } from 'react';
import uuid from 'uuid';
import PostDetails from './PostDetails';

const PostItems = () => {
  const [posts, setPosts] = useState([{
    userId:"",
    id:uuid(),
    title:"",
    body: ""
  }]);
  return (
    <div>
      Posts by a user go here
      {
        posts.map((post) => {
          return (
            <PostDetails 
            key={post.id}
            title={post.title}
            body={post.body}
            />
            
          )
        })
      }
    </div>
  )
}

export default PostItems;
