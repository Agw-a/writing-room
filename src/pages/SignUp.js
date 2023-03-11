import React from 'react'
import { useSignUpContext } from '../components/context/SignUpContext'
import NavBar from '../components/AllPosts/common/NavBar';

const SignUp = () => {

  const {
    handleSetUser,
    handleSignUp,
    userName,
    email,
    UserId,
    password,
  } = useSignUpContext();
  return(
  <>
  <NavBar />
    <div className="form-wrapper">
      <div className="form">

        <div>
          <h2>Sign up Here</h2>
        </div>

        <div>
          <div >
            <div >
              <p className='form-label'>User  Name</p>
              <input className='form-textarea'
                type="text"
                placeholder="First name: Jane"
                name="userName"
                value={userName}
                onChange={handleSetUser}
              />
            </div>

          </div>
          <div className="signupInput-div email">
            <p className='form-label'>Email Address</p>
            <input className='form-textarea'
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleSetUser}
            />
          </div>
          <div>
            <p className='form-label'>Password</p>
            <div className="password-wrapper">
              <input className='form-textarea'
                type={ "text"}
                placeholder="Password: At least 12 characters"
                name="password"
                value={password}
                onChange={handleSetUser}
              />

            </div>
          </div>


          <button className='form-button'
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>

</>
);
};


export default SignUp
