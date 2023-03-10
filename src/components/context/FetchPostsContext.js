import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const LIBRARY_URL = "https://jsonplaceholder.typicode.com/posts"

const FetchPostsContext = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios
        .get(LIBRARY_URL)
        .then((res) => {
            setPosts(res.data)
            setIsLoading(true)
        })
    },[])

  return {
    posts,
    isLoading,
    setIsLoading,
    setPosts
  }

}

const AllPostContext = createContext([])

export function useAllPostContext(){
    return useContext(AllPostContext)
}

export const GetPost = ({children}) => {

    return (
        <AllPostContext.Provider value={FetchPostsContext()}>
            {children}
        </AllPostContext.Provider>
    )
}

