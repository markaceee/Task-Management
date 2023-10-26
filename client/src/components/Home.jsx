import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink> <br />
            home
        </div>
    )
}

export default Home
