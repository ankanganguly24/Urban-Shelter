import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element = {<PrivateRoute/>} >
      <Route path='/Profile' element={<Profile/>}/>
      </Route>
      <Route path='/About' element={<About/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App