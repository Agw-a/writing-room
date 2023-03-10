import React from 'react'
import { Link} from 'react-router-dom'

const NonNav = () => {
  return (
    <nav>
      <div className='logo'>
               <Link to={'/'}> W{" "}S</Link>
      </div>
    </nav>
  )
}

export default NonNav;
