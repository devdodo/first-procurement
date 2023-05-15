import React from 'react'
import { Link } from 'react-router-dom';
import { FaCog, FaBell, FaUserCircle } from 'react-icons/fa'

const Header = () => {
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

  return (
    <div className='width-main flex justify-between mb-12'>
        <div className="header-title">
            <h1 className='text-3xl font-semibold' style={{color: '#5B5B5B'}}>Dashboard</h1>
        </div>
        <div className="header-nav flex">
            <div className="header-date mr-4 mt-2">
                <p>{formatDate(Date.now())}</p>
            </div>
            <div className="header-user mr-4 border-rounded" style={{backgroundColor: "#D9D9D9", padding: "8px 16px" }}>
                <p>James Friedman | SN12345678</p>
            </div>
            <div className="header-icons flex">
                <Link to={"/"}>
                    <FaCog className='text-lg mr-5 mt-3' style={{color: '#5B5B5B'}}/>
                </Link>
                <Link to={"/"}>
                    <FaBell className='text-lg mt-3 mr-5' style={{color: '#5B5B5B'}}/>
                </Link>
                <div >
                    <FaUserCircle className=' mt-1 mr-5 ' style={{color: '#5B5B5B'}} size={38}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header