import { useState } from 'react';
import MayflowerLogo from '../../assets/mayflower logo.png';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    function toggleSidebar() {
        setSidebar(!sidebar);
    }

    return (
        <nav className="navbar mt-2">
            <div className="container-md container-lg containe-xl">
                <div className='nav-bar'>
                    <div className='brand d-flex align-items-center gap-2'>
                        <img className='logo' src={MayflowerLogo} alt="Mayflower Logo" />
                        <a className="navbar-brand fs-5" href="#">Mayflower Children's<br />
                        <span style={{color: '#07c3f6'}}>Foundation</span></a>
                    </div>
                    {/* Desktop Navbar Links */}
                    <ul className="nav-links">
                        <li className='nav-link'><a href="/">Home</a></li>
                        <li className='nav-link'><a href="/programs">Programs</a></li>
                        <li className='nav-link'><a href="/partner-opportunities">Partner opportunities</a></li>
                        <li className='nav-link'><a href="#">Team & Volunteers</a></li>
                        <li className='nav-link'><a href="#">Contact</a></li>
                        <li><button className="btn btn-outline-primary">Donate</button></li>
                    </ul>
                </div>
                {/* Sidebar Toggle Button */}
                <FaBars className='sidebar-btn' onClick={toggleSidebar}/>

                {/* Sidebar Mobile View */}
                <div className={`sidebar ${sidebar ? "active" : ""}`}>
                    <ul>
                        <li className='nav-link'><a href="/">Home</a></li>
                        <li className='nav-link'><a href="/programs">Programs</a></li>
                        <li className='nav-link'><a href="/partner-opportunities">Partner opportunities</a></li>
                        <li className='nav-link'><a href="#">Team & Volunteers</a></li>
                        <li className='nav-link'><a href="#">Contact</a></li>
                        <li><button className="btn btn-outline-primary">Donate</button></li>
                    </ul>
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FaTimes className='close-btn' size={24} />
                    </button>
                </div>

                {/* Overlay (when sidebar is active) */}
                {sidebar && <div className="overlay" onClick={toggleSidebar}></div>}

            </div>
        </nav>
    )
}