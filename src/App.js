import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/HomePage';
import AppHomePage from './pages/Posts';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';
import { UseSignUp } from './components/context/SignUpContext';
import "react-toastify/dist/ReactToastify.css";
import { GetPost } from './components/context/FetchPostsContext';
import CreatePost from './components/AllPosts/CRUD/Create';
import UpdatePost from '../moved/temporary-components/Update';

function App() {
  return (
    <div className='App'>
    <UseSignUp>
    <GetPost>
    <ToastContainer/>
    <Routes>
      <Route path={'/'} element={<Landing />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/posts' element={<AppHomePage />}>
        <Route path='new-post' element={<CreatePost/>}/>
      </Route>
    <Route path="/post/:id" element={<UpdatePost />}/>
    <Route path='*' element={<></>}/>
    </Routes>
    </GetPost>
    </UseSignUp>
    </div>
  );
}

export default App;
