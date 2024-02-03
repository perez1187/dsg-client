import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.scss';



// context
import {AuthenticationProvider} from './hooks/useAuth'

// pages
import Login from './pages/Login';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// components
import Header from './components/Header';
import StickyFooter from './components/Footer/StickyFooter';
import NewReferrals from './pages/NewReferrals';

function App() {

    // we check auth data from local storage and put it as an object to user
    const user = JSON.parse(localStorage.getItem('dsg') )
  return (
    <>
      {/* // we give user, user is sendingg to Authentication provider, and then is set as authDate (useState) */}
      <AuthenticationProvider user = {user}>  {/* everything below are children */}
        {/* <Header/> */}

        <div className="App">

          <BrowserRouter>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/new-referrals" element={<NewReferrals/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
          
          
      </div>
      {/* <StickyFooter/>  */}
      </AuthenticationProvider>  
    </>
  );
}

export default App;
