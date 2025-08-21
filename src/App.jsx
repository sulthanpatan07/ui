import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Homepage from './pages/homepage'
import ExploreSkills from './pages/ExploreSkills'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path="/explore" element={<ExploreSkills/>} />
      </Routes>
    </Router>
  )
}

export default App