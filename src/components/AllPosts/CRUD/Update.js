import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSignUpContext } from "../../context/SignUpContext";
import Loader from "../../Loading/Loading";
import { LIBRARY_URL } from "../common/LibrayApi";

const UpdatePost = () => {
    const navigate = useNavigate()
    const { userId } = useSignUpContext()
    const id = useParams()
    const goBack = () => {
        navigate('/posts')
    }
    const [post, setPost] = useState({})
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [comment, setComments] = useState([])
    const [newComs, setNewComs] = useState({
        name: '',
        email: '',
        body: ''
    })
    const comments_api = "https://jsonplaceholder.typicode.com/comments"

    //get comments
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id.postId}/comments`)
            .then((response) => setComments(response.data))
            .catch(err => console.log(err))
    }, [id])

    const commentChange = (evt) => {
        setNewComs({ ...newComs, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDeafult();
        axios
            .post(comments_api, newComs)
            .then((response) => {
                setComments([...comment, response.data])
                setNewComs({ id, name: "", email: "", body: "" })
            })
            .catch((err) => console.log(err))
    }

    const titleChange = (e) => setTitle(e.target.value)
    const bodyChange = (e) => setBody(e.target.value)

    //update and delete -> verify requests?
    const onUpdate = () => {
        axios
            .put(`${LIBRARY_URL}/${id.postId}`,
                {
                    title, body
                }
            ).then((res) => setPost(res.data))
    };

    const onDelete = () => {
        axios
            .delete(`${LIBRARY_URL}/${id.postId}`)
            .then(() =>
                setPost({}))
    }

    useEffect(() => {

        axios
            .get(`${LIBRARY_URL}/${id.postId}`)
            .then((response) => {
                setIsloading(true);
                setPost(response.data);
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch(function (error) {
                if (error.response.status === 404) {
                    return setIsloading(true);
                }
            });
    }, [id]);



    return (
        <div className='main-page' >
            {/* {JSON.stringify(id)} */}
            <section>

                <button onClick={goBack} className={'action-buttons'}>

                    ↖  Posts
                </button>

                {
                    isLoading ? (
                        <div className='post-card'>
                            <div>


                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                            
                        </div>
                    ) : (<Loader />)
                }

                <div>
                    {
                        post.id && (
                            <div>
                                <h3>Comments:</h3>
                                <ul >
                                    {
                                        comment.sort((a, b) => (b.id - a.id)).map((comms, index) => (
                                            <li key={index} className="post-card">
                                                <h3>{comms.name}</h3>
                                                <p>{comms.body}</p>
                                                <p>{comms.email}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <form onSubmit={handleSubmit} className = {'make-a-post'}>
                                    <div>
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={newComs.name}
                                            onChange={commentChange}
                                        />
                                    </div>

                                    <div >
                                        <label style={{margin:'2px'}}>Email:</label>
                                        <input className='form-textarea'
                                            type="email"
                                            name="email"
                                            value={newComs.email}
                                            onChange={commentChange}
                                        />
                                    </div>

                                    <div >
                                        <label style={{margin:'2px'}}>Comment:</label>
                                        <input  className='form-textarea'
                                            name="body"
                                            value={newComs.body}
                                            onChange={commentChange}
                                        />
                                    </div>
                                    <button  className={'action-buttons'} type='submit'>Submit</button>
                                </form>
                            </div>
                        )}
                </div>

                <div>
                    
                {
                                userId ? (
                                    <div>
                                        <h3>Edit Post</h3>
                                        <div>
                                            <label>Title :</label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={titleChange}
                                            />
                                        </div>
                                        <div>
                                            <label>Post :</label>
                                            <input
                                                type="text"
                                                value={body}
                                                onChange={bodyChange}
                                            />
                                        </div>
                                        <div>
                                            <button onClick={onUpdate}>Update</button>
                                            <button onClick={onDelete}>Delete</button>
                                        </div>
                                    </div>
                                ) : 
                                
                                <div><br></br>
                                <p> <strong>No edit access</strong></p>
                                </div>
                            }
                </div>
            </section>
        </div>
    )
}

export default UpdatePost;
