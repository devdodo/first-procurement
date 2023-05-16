import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Notification from '../components/Notification'

const Notifications = () => {
  const currentPage = "Notification(s)"

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={"4"} />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <Notification />
            </div>
        </div>
    </div>
  )
}

export default Notifications