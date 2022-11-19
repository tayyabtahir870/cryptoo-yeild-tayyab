import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Table() {
  return (
    <div className='table'>
        <div className='text-center table4 '>
        <p className='table1-text mt-5'>SECURELY BUY, SELL, STORE, SEND AND TRACK</p>
        <p className='table2-text'>Buy crypto at true cost</p>
        <p className='table3-text'>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies <br /> using bank transfers or your credit/debit card.
</p>   


        </div>
        <div className='container'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col" className='bitcoin'>Bitcoin <span className='bta'>BTA</span></th>
      <th scope="col" className='number1'>$21,019.25</th>
      <th scope="col" className='colorred'>-1.35%</th>
      <th scope="col" className='number2'>$400,939,726,363.91</th>
      <th scope="col"><img src="Assests/g-blue.png" alt=""  width={120}/></th>
      <th scope="col"><img src="Assests/btn.png" alt="" width={60} /></th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="col" className='bitcoin'>Ethereum <span className='bta'>ETH</span></th>
      <th scope="col" className='number1'>$1,593.36</th>
      <th scope="col" className='colorred'>-2.40%</th>
      <th scope="col" className='number2'>$193,478,949,760.73</th>
      <th scope="col"><img src="Assests/g-red.png" alt=""  width={120}/></th>
      <th scope="col"><img src="Assests/btn.png" alt="" width={60} /></th>
    </tr>
    <tr>
    <th scope="col" className='bitcoin'>Cardano  <span className='bta'>ADA</span></th>
      <th scope="col" className='number1'>$0.411385</th>
      <th scope="col" className='colorred'>-3.69%</th>
      <th scope="col" className='number2'>$13,957,416,040.67</th>
      <th scope="col"><img src="Assests/g-blue.png" alt=""  width={120}/></th>
      <th scope="col"><img src="Assests/btn.png" alt="" width={60} /></th>
    </tr>
    <tr>
    <th scope="col" className='bitcoin'>Dogecoin <span className='bta'>DOGE</span></th>
      <th scope="col" className='number1'>$0.118427</th>
      <th scope="col" className='colorred'>-5.00%</th>
      <th scope="col" className='number2'>$15,551,890,509.69</th>
      <th scope="col"><img src="Assests/g-red.png" alt=""  width={120}/></th>
      <th scope="col"><img src="Assests/btn.png" alt="" width={60} /></th>
    </tr>
    <tr>
    <th scope="col" className='bitcoin'>Polkadot <span className='bta'>DOT</span></th>
      <th scope="col" className='number1'>$6.95</th>
      <th scope="col" className='colorred'>-1.79%</th>
      <th scope="col" className='number2'>$7,791,830,488.81</th>
      <th scope="col"><img src="Assests/g-blue.png" alt=""  width={120}/></th>
      <th scope="col"><img src="Assests/btn.png" alt="" width={60} /></th>
    </tr>
  </tbody>
</table>
        </div>
        <div className='text-center'>
            <button className='tablebutton'>Learn More <span><BsArrowRight /></span></button>
        </div>
    </div>
  )
}

export default Table