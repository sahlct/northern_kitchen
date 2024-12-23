import React from 'react'
import HomeContent from '../components/homeContent'
import Reputation from '../components/reputation'
import About from '../components/about'
import Clients from '../components/clients'
import Consultation from '../components/cunsoltation'
import ConnectUs from '../components/connectUs'
import Experience from '../components/experiance'
import Services from '../components/services'

export default function Home() {
  return (
    <>
    <HomeContent/>
    <Reputation/>
    <About/>
    <Experience/>
    <Clients/>
    <Consultation/>
    <Services/>
    <ConnectUs/>
    </>
  )
}
