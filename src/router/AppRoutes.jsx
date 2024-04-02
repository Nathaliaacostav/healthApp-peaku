import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import PublicRoutes from './PublicRoutes';
import PrivatedRoutes from './PrivatedRoutes';
import 'react-toastify/dist/ReactToastify.css';

import { LoginScreenProvider } from '../context/LoginScreenContext';
import DocHome from '../pages/DocHome';
import { onAuthStateChanged } from 'firebase/auth';
import { setIsAuthenticated, setUser } from '../store/users/userSlice';
import { auth } from '../firebase/firebaseConfig';

import FileUpload from '../pages/FileUpload';
import SuccesfullUpload from '../pages/SuccesfullUpload';


const AppRoutes = () => {
  const {isAuthenticated, user} = useSelector((store) => store.user)
  const dispatch = useDispatch()
  

  return (
      <LoginScreenProvider>
        <Routes>
            <Route element={<PublicRoutes isAuthenticated={isAuthenticated}/>}>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/doctor" element={<DocHome />} />
              <Route index element={<Navigate to="/Welcome" />} />
            </Route>
            <Route element={<PrivatedRoutes isAuthenticated={isAuthenticated} />}>
              <Route path="/succesfull" element={<SuccesfullUpload />} />
              <Route path="/file-upload" element={<FileUpload />} />
              <Route path="/home" element={<Home />} />
              <Route index element={<Navigate to="/home" />} />
            </Route>
        </Routes>
      </LoginScreenProvider>
  )
}

export default AppRoutes;