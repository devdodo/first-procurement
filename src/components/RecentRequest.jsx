import React, { useState, useEffect } from 'react'
import View from '../reusables/View'

const RecentRequest = () => {
    const [request, setRequest] = useState([])

    const userData = JSON.parse(localStorage.getItem('logindata'))
    const [approverName, setApproverName] = useState("")


    useEffect(() => {
        
        fetch(`http://localhost:8000/request?initiatedBy=${userData.staffId}`)
        .then(data => data.json())
        .then(res => {

            setRequest(res)

		    const userData = JSON.parse(localStorage.getItem('logindata'))

            fetch(`http://localhost:8000/users?solId=${userData.solId}&role=HBS`)
            .then(data => data.json())
            .then(res => {
                setApproverName(res[0].name)
            })
            .catch(error => console.error(error)) 
        })
        .catch(error => console.error(error))

    }, [])

    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }


  return (
    <div>
        <div className="section-title mb-3">
            <p className='font-semibold' style={{color: '#5B5B5B'}}>Recent Requests</p>
        </div>
        <div className="section-table border border-1 border-rounded p-4">
        <table className="w-full">
            <thead>
                <tr className='text-left py-4'>
                    <th>S/N</th>
                    <th>Items</th>
                    <th>No of Items</th>
                    <th>Status</th>
                    <th>Approver</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
        
            <tbody>
                {
                    request.length > 0 ?

                        request.map((request, index) => {
                            return(
                                <tr key={index} className='border-t py-4'>
                                    <td>{index+1}</td>
                                    <td>{request.items[index].item}...</td>
                                    <td>{request.items[index].quantity}...</td>
                                    <td className={request.status !== "pending"? "text-green-500": "text-yellow-500"}>{request.status}</td>
                                    <td>{approverName}</td>
                                    <td>{formatDate(request.date)}</td>
                                    <td><View requestId={request.id} /></td>
                                </tr>
                            )
                        })

                    : <tr className='py-4'>No Data in Record</tr>
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentRequest