
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SingleMovies from './SingleMovies'
import Error from './Error'
const App = ()=>{
  return(
  <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/movie/:id' element={<SingleMovies/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;