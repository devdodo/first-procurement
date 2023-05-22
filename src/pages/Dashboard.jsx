import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddButton from '../components/AddButton'
import RecentRequest from '../components/RecentRequest'
import RecentRequestProc from '../components/RecentRequestProc'
import { useSelector } from 'react-redux'



const Dashboard = () => {
  const currentPage = "Dashboard"
  // const data = useSelector((state) => state.login.data)

  const storedElements = localStorage.getItem('logindata')

  const role = JSON.parse(storedElements).role

 

  return (
    <div>
        <div className="flex ">
            <div className="">
                <SideNav itemNum={"0"}/>
            </div>
            <div className="main-div ml-80 w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <Cards />
                {role === "ADMIN"? <AddButton btnText={"Add New Request"}  btnIcon={true} btnColor={"bg-secondary"}/>: ""}
                {role === "PROC"? <RecentRequestProc /> : <RecentRequest />}
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard