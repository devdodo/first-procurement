import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import RequestItem from '../components/RequestItem'
import RequestItemAdmin from '../components/RequestItemAdmin'

const TrackRequestItem = () => {
  const currentPage = "Track Request Item"

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
                {role === "ADMIN"? <RequestItem /> : <RequestItemAdmin />}
                
            </div>
        </div>
    </div>
  )
}

export default TrackRequestItem