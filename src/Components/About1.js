import React from 'react'
import './About1.css'
import coffeeCup from '../Asserts/coffeCup.png'

function About1() {
    const data =[
        {
            Heading :"Our Story",
            para1:"At Cozy Cup, our passion for crafting the perfect cup of coffee drives everything we do. What started as a love for sharing great coffee with friends has blossomed into a community space where people can connect, relax, and enjoy 'artisanal brews made with care.",
            para2:"Cozy Cup brings people together over expertly crafted coffee, creating a warm, inviting space for everyone."
        },
        {
            Heading:"Our Vision",
            para1:"Our vision at Cozy Cup is to be more than just a coffee shop. We strive to create a welcoming environment where every cup tells a story, and every guest feels like part of our family. We aim to build a community that thrives on connection, comfort, and quality.",
            para2:"To create a cozy, welcoming space where coffee lovers can relax, connect, and enjoy exceptional brews."
        }
    ]
    return (
        <div className='AboutPage'>
            <div className='AboutCenter'>
                <h2>About</h2>
                <h1>Serving Since 1994</h1>
            </div>
            <div className='textAbout d-flex flex-lg-row flex-md-column flex-sm-column '>
                <FirstComponent heading={data[0].Heading} para1={data[0].para1} para2={data[0].para2}/>
                <img src={coffeeCup} alt="" />
                <FirstComponent heading={data[1].Heading} para1={data[1].para1} para2={data[1].para2}/>
            </div>
        </div>
    )
}

function FirstComponent(data) {
    const {heading,para1,para2} = data;
    return (
        <div className='firstComponent'>
            <h2>{heading}</h2>
            <p className='para1'>{para2}</p>
            <p>{para1}</p>
            <button className='button text-light'>Learn More</button>
        </div>
    )
}

export default About1
