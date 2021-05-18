import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <p className="header-menu">
         <Link to="/">Home</Link>
         <Link to="/posting">Posting</Link>
           <Link to="/about">About</Link>
           <Link to="/login">Login</Link>
           </p>
        </>
    )
}

export default Header
