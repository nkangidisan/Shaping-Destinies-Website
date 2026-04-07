import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoManager from './components/SeoManager'
import './index.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const AmazingJourney = lazy(() => import('./pages/AmazingJourney'))
const TeamLeader = lazy(() => import('./pages/TeamLeader'))
const Outreach = lazy(() => import('./pages/Outreach'))
const MassEvangelism = lazy(() => import('./pages/MassEvangelism'))
const SchoolUniversity = lazy(() => import('./pages/SchoolUniversity'))
const FreeMedicalOutreach = lazy(() => import('./pages/FreeMedicalOutreach'))
const FoodDistribution = lazy(() => import('./pages/FoodDistribution'))
const Donate = lazy(() => import('./pages/Donate'))
const Give = lazy(() => import('./pages/Give'))
const Success = lazy(() => import('./pages/Success'))
const Cancel = lazy(() => import('./pages/Cancel'))
const Search = lazy(() => import('./pages/Search'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const WomenOfDestiny = lazy(() => import('./pages/WomenOfDestiny'))

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const scrollToHash = () => {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }

    const timer = window.setTimeout(scrollToHash, 80)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <Router>
      <SeoManager />
      <ScrollManager />
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={null}>
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
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/search" element={<Search />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/women-of-destiny" element={<WomenOfDestiny />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
