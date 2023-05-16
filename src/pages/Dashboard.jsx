import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddButton from '../components/AddButton'
import RecentRequest from '../components/RecentRequest'

const Dashboard = () => {
  const currentPage = "Dashboard"

  return (
    <div>
        <div className="flex ">
            <div className="">
                <SideNav itemNum={"0"}/>
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <Cards />
                <AddButton btnText={"Add New Request"}  btnIcon={true}/>
                <RecentRequest />
            </div>
        </div>
    </div>
  )
}

export default Dashboard