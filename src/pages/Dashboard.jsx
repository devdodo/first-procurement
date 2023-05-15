import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddButton from '../components/AddButton'
import RecentRequest from '../components/RecentRequest'

const Dashboard = () => {
  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header />
                <Cards />
                <AddButton />
                <RecentRequest />
            </div>
        </div>
    </div>
  )
}

export default Dashboard