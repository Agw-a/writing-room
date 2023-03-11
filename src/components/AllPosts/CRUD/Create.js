import React, { useState } from 'react'
import { LIBRARY_URL } from '../common/LibrayApi'
import { useAllPostContext } from '../../context/FetchPostsContext'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {

    const {posts, setPosts} = useAllPostContext();
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(LIBRARY_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body:body,
                userId:10
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res =>res.json())
        .then(data => {
            setPosts([...posts, data])
            setTitle('')
            setBody('')
            navigate('/posts')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='new-post-container'>
    <div>
      <form onSubmit={handleSubmit} >
      <div>
        <h3 className='into-text light-text'>Post a message</h3>
        </div>

          <div>
           <label style={{margin:'2px'}}>Title</label>
          <input className='form-textarea'
          type="text" 
          placeholder='Enter a post Title'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}/>
          </div>

          <div>
          <label style={{margin:'2px'}}>Post</label>
          <input className='form-textarea'
          type="text" 
          placeholder='Enter a your content'
          value={body}
          onChange={(evt) => setBody(evt.target.value)}/>

          
          </div>
          <div  className={'buttons-container'}></div>
          <button type='submit' className={'action-buttons'} id='single-buttons'>Add Post</button>
          <button onClick={() => navigate('/posts')} className={'action-buttons'}>Close</button>
      </form>
      
    </div>
  </div>
  )
}

export default CreatePost
