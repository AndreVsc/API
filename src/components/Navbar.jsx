import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='Navbar-conatainer'>
        <ul>
            <li><Link to="/">Game</Link></li>
            <li><Link to="/contact">Posts</Link></li>
        </ul>
    </nav>
  )
}
