import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import './App.css'
import { auth } from './firebase.init';
import { useState } from 'react';


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
gitHubProvider.addScope('user:email');

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        console.log(result.user);
        const loggedInUser = result.user;

        if (!loggedInUser.email) {
          if (loggedInUser.providerData) {
            const gitProvider = loggedInUser
              .providerData.find(p => p.providerId === 'github.com');
            if (gitProvider && gitProvider.email) {
              loggedInUser.email = gitProvider.email;
            }
          }
        }

        setUser(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <>

      <h1>Simple Dimple Auth</h1>
      {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleSignOut}>SignOut</button> */}

      {
        user
          ?
          <button onClick={handleSignOut}>SignOut</button> :
          <>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleGithubSignIn}>Sign In with GitHub</button>
          </>
      }

      {user && <div>
        <h2>{user.displayName}</h2>
        <h4>Email: {user.email}</h4>
        <img src={user.photoURL} alt="" />
      </div>}
    </>
  )
}

export default App
