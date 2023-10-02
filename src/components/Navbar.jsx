import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='Navbar-conatainer'>
        <ul>
            <li><Link to="/">GAME</Link></li>
            <li><Link to="/api">API</Link></li>
        </ul>
    </nav>
  )
}
