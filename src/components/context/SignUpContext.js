import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


const SignUpSetUp = () => {

    const newUser = {
        userName: "",
        email: "",
        password: "",
        UserId: Math.floor((Math.random() * 10) + 1)
      }

      const navigate = useNavigate();
      const [user, setUser] = useState(newUser);


      const {
        userName,
        email,
        password,
        UserId
      } = user;



      
      const handleSetUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };


      const handleSignUp =  (e) => {
        e.preventDefault();
        if(userName && email && UserId && password &&  password.length >= 12){
          navigate("/posts");
          
          toast.success('Account created Succesfully')
        } else if(password.length < 12){
          return toast.error('Password need at least 12 characters to finish step')
        }
    
      }

      return{handleSetUser,handleSignUp,
        userName,
        email,
        password,
        UserId
    }
}

const SignUpContext = createContext([])

export function useSignUpContext(){
    return useContext(SignUpContext)
  }


export const UseSignUp = ({children}) => {


  return (
    <SignUpContext.Provider value={SignUpSetUp()}>
      {children}
    </SignUpContext.Provider>
  )
}