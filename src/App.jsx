import './App.css'
import Body from './Body'
import Login from './component/Login'
import Profile from './Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './component/Feed'
function App() {


  return (
    <>
    <Provider store = {appStore}>
      <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body />}>

          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />

        </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
