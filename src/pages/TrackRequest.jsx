import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import RecentRequest from '../components/RecentRequest'

const TrackRequest = () => {
  const currentPage = "Track Request"

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={"2"} />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <RecentRequest />
            </div>
        </div>
    </div>
  )
}

export default TrackRequest