import React, {useState, useMemo} from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useSignUpContext } from '../components/context/SignUpContext';
import Loader from '../components/Loading/Loading';
import { useAllPostContext } from '../components/context/FetchPostsContext';
import NonNav from '../components/AllPosts/common/NonNav';

const AppHomePage = () => {


const [search, setSearch] = useState("")
const{username} = useSignUpContext()
const{posts,
  isLoading,
} = useAllPostContext()
const navigate = useNavigate()
const [pageNumber, setPageNumber] = useState(0)
const postsPerPage = 12
const pagesVisited = pageNumber * postsPerPage




//Sort posts
const sortedPosts = useMemo(() => 
posts.sort((a,b) => b.id - a.id)
,[posts])

const pageCount = Math.ceil(posts.length / postsPerPage);

const changePage = ({viewed_page}) => {
  setPageNumber(viewed_page)
}

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
        {/* <div>
          <input placeholder='Search for a post' value={search} onChange={ev => ev.target.value}/>
        </div> */}
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
            isLoading ? sortedPosts.slice(pagesVisited, pagesVisited + postsPerPage)
            .map((post, index) => {
              return (
                <div key={index} className={'post-card'}>
                   <div>
                    <h3 className='post-title'>
                      {/* {filterdView(post.title, 20)} */}
                      {post.title}
                      <br></br>
                      </h3>
                      <p className='post-body'>
                        {post.body}
                        {/* {filterdView(post.body, 100)} */}
                        </p>
                    
                   </div>
                </div>
              )
            }) : <Loader />
          }
        </div>
        {/* <div>
          {
            isLoading ? <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            
            /> : ''
          }
        </div> */}
      </div>
      </section>
    </>
  )
}

export default AppHomePage;
