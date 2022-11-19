import React from 'react'
import Card from '../Components/Elements/Card'
import Deposit from '../Components/Elements/Deposit'
import Hero from '../Components/Elements/Hero'
import Table from '../Components/Elements/Table'
import Vision from '../Components/Elements/Vision'

function Home() {
  return (
    <div>
        <Hero/>
        <Table/>
        <Card/>
        <Deposit/>
        <Vision/>
    </div>

  )
}

export default Home