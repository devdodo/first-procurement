import React from 'react'

const Header = () => {
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

  return (
    <div>
        <div className="header-title">
            <h1>Dashboard</h1>
        </div>
        <div className="header-nav">
            <div className="header-date">
            <p>{formatDate(Date.now())}</p>
            </div>
            <div className="header-user"></div>
            <div className="header-icons"></div>
        </div>
    </div>
  )
}

export default Header