import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './pages/IndexPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ExperEduPage from './pages/ExperEduPage';
import PortoPage from './pages/PortoPage';

function App() {


  return (
    <div className="App">
      {/* <Navi/> */}
       <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/ExpEdu' element={<ExperEduPage/>}/>
        <Route path='/Porto' element={<PortoPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
