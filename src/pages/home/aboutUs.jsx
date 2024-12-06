import React from 'react'
import About from '../components/about'
import Reputation from '../components/reputation'


export default function AboutUs() {
  return (
    <div className='py-10 md:py-0'>
      <Reputation/>
      <About />
    </div>
  )
}
