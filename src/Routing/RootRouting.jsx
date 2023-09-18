import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Layout/Header/Header'
import MyForm from "../Component/MyForm/MyForm";



const RootRouting = () => {

  return (
    <Router>
        <Header/>
        <Routes>

          {/* <Route path='' element={<SignUp/>} /> */}

          <Route path='my-form' element={<MyForm/>} />


        </Routes>
    </Router>
  )
}

export default RootRouting