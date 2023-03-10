import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NonNav = () => {
    const navigate = useNavigate()
  return (
    <nav>
      <div className='logo'>
               <Link to={'/'}> W{" "}S</Link>
      </div>
    </nav>
  )
}

export default NonNav;
