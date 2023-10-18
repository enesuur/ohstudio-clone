

import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className='container'>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </div>
        </nav>
    )

};