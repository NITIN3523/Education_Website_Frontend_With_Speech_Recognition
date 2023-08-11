import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Achievement from './Achievement'
import BestTeam from './BestTeam'
import Review from './Review'

export default function About() {
  return (
    <div>
      <Navbar />
      <Achievement/>
      <BestTeam/>
      <Review/>
      <Footer />
    </div>
  )
}