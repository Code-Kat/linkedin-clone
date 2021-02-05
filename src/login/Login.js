import React, { useState } from 'react';
import { auth } from '../body/firebase';
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice';

function Login() {

    const [email, setEmail] =useState ("");
    const [password, setPassword] = useState ("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState ("")
    const dispatch = useDispatch();
    const profilePicOption = profilePic ? profilePic : null;

    const register= () => {
        if (!name) {
            return alert("Please enter a full name!")
        }
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                console.log("updated profile")
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePicOption,
                })
                .then(()=> {
                    dispatch(login({
                        email: userAuth.user.email,
                        user: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePicOption,
                    }));
                 });
        }).catch((error) => alert(error))
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
             dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 displayName: userAuth.user.displayName,
                 profileUrl: userAuth.user.profileURL,
             }))
         })
        .catch(error => alert (error+'  If you do not have an account, please fill in your information and click "Register now".'))
    };

    return (
        <div className="login">
            <img 
                src="https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013.svg" 
                alt=""
            />
            <form>
                <input 
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    className="login__input" 
                    type="text" 
                    placeholder="Full name (required if registering)" 
                />
                <input 
                    value={profilePic}
                    onChange={e=>setProfilePic(e.target.value)}
                    className="login__input" 
                    type="url"
                    placeholder="Profile pic URL (optional)" 
                />
                <input 
                    value={email} 
                    onChange={e=> setEmail (e.target.value)}
                    className="login__inputBlue" 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange= {e=> setPassword(e.target.value)}
                    className="login__inputBlue" 
                    type="password" 
                    placeholder="Password" 
                />

                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?
                <span 
                    className="login__register" 
                    onClick={register}> 
                        &nbsp;Register now
                </span>
            </p>
        </div>
    )
}

export default Login
