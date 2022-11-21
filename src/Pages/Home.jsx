import React from 'react'
import Deposit from '../Components/Elements/Deposit'
import Hero from '../Components/Elements/Hero'
import Liqiudity from '../Components/Elements/Liqiudity'
import Need from '../Components/Elements/Need'
import Simple from '../Components/Elements/Simple'
import Table from '../Components/Elements/Table'
import Trade from '../Components/Elements/Trade'
import Vision from '../Components/Elements/Vision'
import Footer from '../Components/Layouts/Footer'
import Header from '../Components/Layouts/Header'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Table/>
        <Need/>
        <Deposit/>
        <Trade/>
        <Liqiudity/>
        <Simple/>
        <Vision/>
        <Footer/>
    </div>

  )
}

export default Home