import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import RecentRequest from '../components/RecentRequest'

const TrackRequest = () => {
  const currentPage = "Track Request"

  const storedElements = localStorage.getItem('logindata')

  const role = JSON.parse(storedElements).role

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={role === "ADMIN" ? "2" : "1"} />
            </div>
            <div className="main-div ml-80 w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <RecentRequest />
            </div>
        </div>
    </div>
  )
}

export default TrackRequest