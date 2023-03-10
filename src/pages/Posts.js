import React, { useMemo} from 'react'
import {  Outlet, useNavigate } from "react-router-dom";
import { useSignUpContext } from '../components/context/SignUpContext';
import Loader from '../components/Loading/Loading';
import { useAllPostContext } from '../components/context/FetchPostsContext';
import NonNav from '../components/AllPosts/common/NonNav';

const AppHomePage = () => {


const{username} = useSignUpContext()
const{posts,
  isLoading,
} = useAllPostContext()
const navigate = useNavigate()




//Sort posts
const sortedPosts = useMemo(() => 
posts.sort((a,b) => b.id - a.id)
,[posts])



return (
  <>
  <NonNav />
    <section className='main-page'>
      <div className='make-a-post'>
        <div className='into-text'>
            {
            username ? (<h3>Hello {username }  Share your thoughts with the world</h3>) : <h3>Welcome, you can now create and view posts as you wish</h3>
          }
        </div>
          
        <div>

        <div>
        <button onClick={() => navigate('/posts/new-post')} className={'action-buttons'}>New post</button>
        </div>
        </div>
      </div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>

      <div >
        <div className={'all-posts'}>
          {
            isLoading ? sortedPosts
            .map((post, index) => {
              return (
                <Link  to={`/post/${post.id}`} key={index} className={'post-card'}>
                   <div>
                    <h3 className='post-title'>

                      {post.title}
                      <br></br>
                      </h3>
                      <p className='post-body'>
                        {post.body}

                        </p>
                    
                   </div>
                </Link>
              )
            }) : <Loader />
          }
        </div>

      </div>
      </section>
    </>
  )
}

export default AppHomePage;
