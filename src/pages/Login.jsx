import React, {useEffect} from 'react'
import SignIn from '../components/signIn/SignIn'

function Login() {
  useEffect(() => {
    document.body.classList.add("black-body");
    return () => {
      document.body.classList.remove("black-body");
    };
  }, []);
  return (
    <div
        style={{background: "black"}}
    >
        <SignIn/>
    </div>
  )
}

export default Login