import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import LoginUser from '../pages/Login'
import SignUpUser from '../pages/SignUp'
import HomePage from '../pages/HomePage'
import Profile from '../pages/Profile'


const AppRoutes = () => {
  return (

    <Routes>
        <Route path = '/' element = {<Landing />}/>
        <Route path='/posts' element={<HomePage />}/>
        <Route path='/signup' element={<SignUpUser />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/profile' element={<Profile />}/>
    </Routes>

      
    
  )
}

export default AppRoutes
