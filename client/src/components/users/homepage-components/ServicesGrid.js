import React from 'react'
import "./servicesGrid.css"

const services = [
    {
        title: "Apple Watch 7 Gen with Stainless Steel",
        price: 300,
        rating: 4,
        description: "This is a digital watch",
        image: "apple-watch.png"
    },
    {
        title: "Mac Book Pro",
        price: 900,
        rating: 5,
        description: "This is a digital watch",
        image: "mbp.jpeg"
    },
    {
        title: "Apple Vision Pro",
        price: 2500,
        rating: 3,
        description: "IPad Pro",
        image: "ipad.webp"
    },
    {
        title: "iMac 27'",
        price: 2499,
        rating: 4,
        description: "This is a digital watch",
        image: "imac.webp"
    },
    {
        title: "Mac Mini",
        price: 599,
        rating: 5,
        description: "This is a digital watch",
        image: "mm.jpeg"
    },
]

function ServicesGrid() {
    return (
        <div class="grid" >

            {services.map((service, index) => (
                <div class="service-card">
                    <img src={`/assets/serviceImage/${service.image}`} alt='product' />
                    <h2>{service.title}</h2>
                    <h2>${service.price}</h2>
                    <div class="rating-container">
                        <label>Rating</label>
                        <label>{service.rating}</label>
                    </div>
                </div>
            ))
            }

        </div>
    )
}

export default ServicesGrid