import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import RequestItem from '../components/RequestItem'

const TrackRequestItem = () => {
  const currentPage = "Track Request Item"

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={"2"} />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <RequestItem />
            </div>
        </div>
    </div>
  )
}

export default TrackRequestItem