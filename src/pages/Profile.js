import React from 'react'
import firebaseConfig from '../utils/auth/Firebase'



const Profile = () => {
  return (
    <div>
    <div>
      Profile login
    </div>
    <button onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
    </div>
  )
}

export default Profile
