import React from 'react'
import './Footer.css'

import location from '../Asserts/locaiton.svg'
import call from '../Asserts/call.svg'
import mail from '../Asserts/mail.svg'

import twitter from '../Asserts/twitter.png'
import facebook from '../Asserts/facebook.png'
import insta from '../Asserts/insta.png'
import linkedin from '../Asserts/linkedin.png'
function Footer() {
    const imgs = [twitter, facebook, insta, linkedin];
    return (
        <>
            <div className='footer'>
                <div className="divFooetr">
                    <div className="divone">
                        <h2>Get In touch</h2>
                        <p><span><img src={location} alt="" /></span>416 AKP, Vizag, AP</p>
                        <p><span><img src={call} alt="" /></span>+91 6302255030</p>
                        <p><span><img src={mail} alt="" /></span>rohithsai4734@gmail.com</p>
                    </div>
                    <div className="divone">
                        <h2>Follow Us</h2>
                        <p>Follow us for exciting updates, special promotions, and the latest news from Cozy Cup!</p>
                        <div className="sMedia">
                            {
                                imgs.map((img) => {
                                    return (
                                        <div className="one">
                                            <img src={img} alt="" />
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="one">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="one">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="one">
                                <img src={insta} alt="" />
                            </div>
                            <div className="one">
                                <img src={linkedin} alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="divone">
                        <h2>Open Hours</h2>
                        <p>Monday - Friday</p>
                        <p>8.00 AM - 8.00 PM</p>
                        <p>Saturday - Sunday</p>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                    <div className="divone">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our newsletter for the latest coffee trends, exclusive offers, and brewing tips!</p>
                        <div className="formss">
                            <input type="text" placeholder='Your Email' />
                            <button>Signin</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divlast">
                <h3>Copyright © COZY CUP. All Rights Reserved. </h3>
                <h2>Designed By <span style={{ color: "rgb(218, 159, 91)" }}>Rohith Sai</span></h2>
            </div>
        </>
    )
}

export default Footer
