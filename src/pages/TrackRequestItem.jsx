import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import RequestItem from '../components/RequestItem'
import RequestItemAdmin from '../components/RequestItemAdmin'
import RequestItemProc from '../components/RequestItemProc'

const TrackRequestItem = () => {
  const currentPage = "Track Request Item"

  const storedElements = localStorage.getItem('logindata')

  const role = JSON.parse(storedElements).role

    const requestItem = () => {
        if(role==="ADMIN"){
            return <RequestItem />
        }else if(role==="HBS"){
            return <RequestItemAdmin />
        }else if(role==="PROC"){
            return <RequestItemProc />
        }
    }

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={role === "ADMIN" ? "2" : "1"} />
            </div>
            <div className="main-div ml-80 w-full py-6 px-8">
                <Header currentPage={currentPage} />
                {/* {role === "ADMIN"? <RequestItem /> : <RequestItemAdmin />} */}
                {requestItem()}
                
            </div>
        </div>
    </div>
  )
}

export default TrackRequestItem