import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AmazingJourney from './pages/AmazingJourney'
import TeamLeader from './pages/TeamLeader'
import Outreach from './pages/Outreach'
import MassEvangelism from './pages/MassEvangelism'
import SchoolUniversity from './pages/SchoolUniversity'
import FreeMedicalOutreach from './pages/FreeMedicalOutreach'
import FoodDistribution from './pages/FoodDistribution'
import Donate from './pages/Donate'
import Give from './pages/Give'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import WomenOfDestiny from './pages/WomenOfDestiny'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/amazing-journey" element={<AmazingJourney />} />
            <Route path="/team-leader" element={<TeamLeader />} />
            <Route path="/outreach/*" element={<Outreach />} />
            <Route path="/outreach/mass-evangelism" element={<MassEvangelism />} />
            <Route path="/outreach/school-and-university" element={<SchoolUniversity />} />
            <Route path="/outreach/free-medical-outreach" element={<FreeMedicalOutreach />} />
            <Route path="/outreach/food-distribution" element={<FoodDistribution />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/give" element={<Give />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/women-of-destiny" element={<WomenOfDestiny />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
