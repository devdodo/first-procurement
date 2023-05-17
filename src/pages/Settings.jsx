import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import ChangePassword from '../components/ChangePassword'

const Settings = () => {
  const currentPage = "Settings"

  const storedElements = localStorage.getItem('logindata')

  const role = JSON.parse(storedElements).role

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={role === "ADMIN" ? "3" : "2"} />
            </div>
            <div className="main-div ml-80 w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <ChangePassword />
            </div>
        </div>
    </div>
  )
}

export default Settings