import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/navbar.js/NavBar'

const Landing = () => {
    const navigate = useNavigate()
  return (
<>
<NavBar />
<div className='landing-page'>
  <div className='container'>
    <div>
      <h1>WRITING BOOTH</h1>
    </div>
    <div className={'support-text'}> 
      <div>
        <p>Write</p>
        <p>Share comments</p>
      </div>
        <button  onClick={() => navigate('/posts')}>
            Read Posts
        </button>
    </div>
    </div>
</div>
</>
  )
}

export default Landing
