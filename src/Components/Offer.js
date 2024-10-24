import React from 'react'
import './Offer.css'

function Offer() {
  return (
    <div className='Offer'>
     <div className="divBlock">
        <h1>50% <span>Off</span></h1>
        <h2>Sunday Special Offer</h2>
        <p>Only for Sunday from 1st Oct to 22nd Nov 2024</p>
        <div className="forms">
        <input type="text"  placeholder='Your Email'/>
        <button>Signin</button>
        </div>
     </div>
    </div>
  )
}

export default Offer
