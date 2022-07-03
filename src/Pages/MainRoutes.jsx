import React from 'react'
import {Route, Routes} from "react-router-dom"
import Books from './Books'


const MainRoutes = () => {
  
  return (
    <Routes>
       <Route path='/' element={<Books/>}/>
       <Route path='/books/:id'/>
       <Route path='/books/:id/edit'/>
       <Route path='/admin'/>
       <Route path='*' element={<h1>Page not found 404</h1>}/>
    </Routes>
  )
}

export default MainRoutes