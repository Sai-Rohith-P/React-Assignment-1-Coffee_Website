import React from 'react'
import './Services.css'

import pic1 from '../Asserts/pic1.jpg';
import pic2 from '../Asserts/pic2.jpg';
import pic3 from '../Asserts/pic3.jpg';
import pic4 from '../Asserts/pic4.jpg';

import delevaryIcon from '../Asserts/Delivary.svg'
import Cup from '../Asserts/cup.svg'
import Medal from '../Asserts/medal.svg'
import table from '../Asserts/table.svg'

function Services() {
    const ServicesData = [
        {
            img: pic1,
            icon: delevaryIcon,
            name: "Fastest Door Delivery",
            desc: "Enjoy our fastest door delivery service, designed to bring your favorite coffee right to your doorstep in record time. Freshness and speed guaranteed for your satisfaction!",
        }, {
            img: pic2,
            icon: Cup,
            name: "Fresh Coffee Beans",
            desc: "Our fresh coffee beans are sourced from top growers around the world, ensuring vibrant flavors and aromas in every cup. Experience coffee at its finest today!",
        }, {
            img: pic3,
            icon: Medal,
            name: "Best Quality Coffee",
            desc: "Indulge in our best quality coffee, meticulously crafted from premium beans. Each cup delivers rich flavors and delightful aromas, perfect for every coffee lover’s palate.",
        }, {
            img: pic4,
            icon: table,
            name: "Online Table Booking",
            desc: "Book your table online effortlessly! Reserve your spot at Cozy Cup in seconds, ensuring a delightful experience with friends and family over our delicious coffee.",
        }
    ]
    return (
        <div className='AboutPage'>
            <div className='AboutCenter Services'>
                <h2>Our Services</h2>
                <h1>Fresh & Organic Beans</h1>
            </div>
            <div className="servicesCart">
                {
                    ServicesData.map((eachItem) => {
                        const {img,icon,name,desc} = eachItem;
                        return (
                            <div className="ServiceOne">
                                <div className="imgDiv">
                                    <img src={img} alt="" />
                                </div>
                                <div className="textContent">
                                    <div className="heading">
                                        <div className='Icon'>
                                            <img src={icon} alt="" />
                                        </div>
                                        <div><h3>{name}</h3></div>
                                    </div>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Services
