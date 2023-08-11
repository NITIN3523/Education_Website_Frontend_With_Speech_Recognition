import React from 'react'
import QNA from './FAQ/QAmap'
import Footer from '../Footer'
import Slider from './Slider'
import OurtpSub from './OurtpSub'
import OurtpCour from './OurtpCour'
import Navbar from '../Navbar'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <OurtpSub />
      <OurtpCour />
      <QNA />
      <Footer />
    </div>
  )
}
