import React from 'react'
import { auth } from '../services/userServices'

// using context
import { useAuth } from '../hooks/useAuth'
import LayoutOne from '../components/Layouts/LayoutOne'

const Home = () => {


  const username = "admin"
  const password = "DSGDSGDSG"
  // useStates for context
  const { authData, setAuth } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault() // we are not going to refresh the page

    // we can use shortcur if key and value is the same{username,  password}
    const data = await auth({ 'username': username, 'password': password })
    console.log(data)
    await setAuth(data)
  }

  function showMe() {
    console.log(authData)
  }




  return (
    <div>
      <LayoutOne>
        <div className='tempBox'>
          <button onClick={handleSubmit}>
            Activate Lasers
          </button>
          <button onClick={showMe}>
            Ad
          </button>
        </div>
      </LayoutOne>
    </div>
  )
}

export default Home