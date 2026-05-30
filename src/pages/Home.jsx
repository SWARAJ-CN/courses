import React, { useState } from 'react'
import Hero from '../components/Hero'
import AutoScroll from '../components/AutoScroll'
import Why from '../components/Why'
import Partner from '../components/Partner'
import Courses from '../components/Courses'
import Offer from '../components/Offer'
import Talents from '../components/Talents'
import TrustedBy from '../components/TrustedBy'
import Testimonials from '../components/Testimonials'
import Batches from '../components/Batches'
import EventsGallery from '../components/EventsGallery'
import GlobalFootprint from '../components/GlobalFootprint'


const Home = () => {

  return (
    <>
      <Hero/>
      <AutoScroll/>
      <Why/>
      <Partner/>
      <Courses/>
      <AutoScroll/>
      <Offer/>
      <Talents/>
      <TrustedBy/>
      <Testimonials/>
      <Batches/>
      <EventsGallery/>
      <GlobalFootprint/>
    </>
  )
}

export default Home