import { Routes, Route } from 'react-router-dom'

import UserNavBar from '../components/users/navigation/userNavBar'

import Home from '../pages/users/01-home'
import Services from '../pages/users/03-services'
import AboutUs from '../pages/users/02-aboutUs'
import ContactUs from '../pages/users/04-contactUs'
import AdminSignUpPage from '../pages/admin/auth/01-adminSignUpPage'
import AdminLoginPage from '../pages/admin/auth/02-adminLoginPage'

function ConditionalRoutes() {

    return (
        <>
            <UserNavBar />
            <Routes>
                <Route path='/admin-signup' element={<AdminSignUpPage />} />
                <Route path='/admin-login' element={<AdminLoginPage />} />

                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
        </>
    )

}

export default ConditionalRoutes