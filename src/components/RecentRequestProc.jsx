import React from 'react'
import View from '../reusables/View'

const RecentRequestProc = () => {
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
                    <th>Branch</th>
                    <th>Status</th>
                    <th>Requester</th>
                    <th>Date Requested</th>
                    <th>Action</th>
                </tr>
            </thead>
        
            <tbody>
                <tr className='border-t py-4'>
                    <td>1</td>
                    <td>Iganmu</td>
                    <td className='text-green-500'>Pending</td>
                    <td>Atolagbe Emmanuel</td>
                    <td>Monday, 23rd November 2023</td>
                    <td><View /></td>
                </tr>
                <tr className='border-t py-4'>
                    <td>1</td>
                    <td>Iganmu</td>
                    <td className='text-green-500'>Pending</td>
                    <td>Atolagbe Emmanuel</td>
                    <td>Monday, 23rd November 2023</td>
                    <td><View /></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentRequestProc