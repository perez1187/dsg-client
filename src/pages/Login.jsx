import React, { useEffect } from 'react'
import SignIn from '../components/signIn/SignIn'
import LayoutOne from '../components/Layouts/LayoutOne';

function Login() {
  useEffect(() => {
    document.body.classList.add("black-body");
    return () => {
      document.body.classList.remove("black-body");
    };
  }, []);
  return (
    <LayoutOne>
      <SignIn />
    </LayoutOne>
  )
}

export default Login