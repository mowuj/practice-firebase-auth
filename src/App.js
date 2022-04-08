
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, signOut } from "firebase/auth";
import app from './Firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);
function App() {
const [user ,setUser]=useState({})

  const googleProvider = new GoogleAuthProvider();
  const gitHubprovider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
      const user=result.user
      setUser(user)
      })
      .catch(error => {
      console.error(error)
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubprovider)
      .then(result => {
      const user=result.user
      setUser(user)
      })
      .catch(error => {
      console.error(error)
    })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      setUser({})
      })
      .catch(error => {
      setUser({})
    })
  }
  return (
    <div className="App">
      {user.uid ? <button onClick={handleSignOut}>Sign Out</button>:
        <>
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleGithubSignIn}>Sign In With Github</button>
        </>
      }
      <h2>User Name:{user.displayName}</h2>
      <p>Email:{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
