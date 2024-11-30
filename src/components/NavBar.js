import React from 'react'
import '../stylesheets/NavBar.css'

function Header() {
  //const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (
    <div className='nav-bar'>
        <a href= "/" className='head-links'>Home</a>
        {/* <a href= {link} className='head-links'>About Us</a>
        <a href= {link} className='head-links'>Highlights</a> */}
        <a href= "/calender" className='head-links'>Astro Calender</a>
        <a href= "/gallery" className='head-links'>Gallery</a>
        <a href= "/blog" className='head-links'>Blogs</a>
        <a href= "/login" className='head-links'>Login/SignUp</a>

    </div>

  )
}

export default Header