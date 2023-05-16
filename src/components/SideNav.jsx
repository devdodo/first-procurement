import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaPlusCircle, FaMapMarkerAlt, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa'
import FBNLogo from '../assets/fbn-logo-white.png'
import FBNBg from '../assets/fbn-bg.png'

const SideNav = ({itemNum}) => {

    const navItems = [
        {
            name: "Dashboard",
            icon: <FaHome className='text-lg mt-1 mr-5'/>,
            link: "/dashboard",
        },
        {
            name: "New Request",
            icon: <FaPlusCircle className='text-lg mt-1 mr-5'/>,
            link: "/newrequest",
        },
        {
            name: "Track Request",
            icon: <FaMapMarkerAlt className='text-lg mt-1 mr-5'/>,
            link: "/trackrequest",
        },
        {
            name: "Settings",
            icon: <FaCog className='text-lg mt-1 mr-5'/>,
            link: "/settings",
        },
        {
            name: "Notifications",
            icon: <FaBell className='text-lg mt-1 mr-5'/>,
            link: "/notifications",
        },
    ]
  return (
    <div className='sidenav w-80 bg-primary h-screen text-white' >
        <div className="section-bg h-full px-5 py-3" style={{backgroundImage: `url(${FBNBg})`, backgroundSize: 'cover', backgroundPosition: 'Center', overflow: "hidden"}}>
            <div className="nav-title pb-7 flex justify-center">
                <img src={FBNLogo} alt="" className='w-36'/>
            </div>
            <div className="h-5/6 side-nav-height flex flex-col justify-between">
                <div className="nav-links">
                    {
                        navItems.map((item, index) => (
                            <Link to={item.link}>    
                                <div className={`nav-items flex mb-4 p-2 border-rounded ${ index == itemNum ? 'active' : ''}`}>
                                    {item.icon}
                                    {console.log(itemNum)}
                                    <p className='text-lg font-semibold '>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <Link to="/logout">    
                    <div className="nav-items flex">
                        <FaSignOutAlt className='text-lg mt-1 mr-5'/>
                        <p className='text-lg font-semibold'>Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SideNav