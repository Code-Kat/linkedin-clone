import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Header from "./header/Header";
import Sidebar from './body/Sidebar';
import Feed from './body/Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from "./login/Login";
import { auth } from "./body/firebase";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //user logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />

      { !user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        </div>
      )}
        
    </div>
  );
}

export default App;
