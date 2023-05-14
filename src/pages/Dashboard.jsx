import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav />
            </div>
            <div className="main-div">
                <Header />
            </div>
        </div>
    </div>
  )
}

export default Dashboard