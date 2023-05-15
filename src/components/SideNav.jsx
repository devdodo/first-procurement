import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaPlusCircle, FaMapMarkerAlt, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa'

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
    <div className='sidenav w-80 bg-primary h-screen px-5 py-6 text-white' >
        <div className="nav-title pb-14">
            <h1 className='text-3xl italic font-semibold'>FirstProc</h1>
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
  )
}

export default SideNav