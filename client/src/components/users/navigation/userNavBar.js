import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserNavBar() {
    const navigate = useNavigate()

    return (
        <div class="navbar">
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/about-us")}>About us</p>
            <p onClick={() => navigate("/services")}>Services</p>
            <p onClick={() => navigate("/contact-us")}>Contact us</p>
        </div>
    )
}

export default UserNavBar