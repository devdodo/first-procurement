import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import AddItems from '../components/AddItems'

const NewRequest = () => {
  const currentPage = "New Request"

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={"1"} />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <AddItems />
            </div>
        </div>
    </div>
  )
}

export default NewRequest