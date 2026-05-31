import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllCourses from './pages/AllCourses'
import Event from './components/Event'
import Internship from './components/Internship'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<AllCourses/>}/>
      <Route path='/events' element={<Event/>}/>
      <Route path='/internships' element={<Internship/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App