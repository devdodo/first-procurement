import React from 'react'
import View from '../reusables/View'

const RecentRequest = () => {
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
                <tr className='border-t py-4'>
                    <td>1</td>
                    <td>Laptops</td>
                    <td>400</td>
                    <td className='text-green-500'>Approved</td>
                    <td>Ayobami Paul</td>
                    <td>22/05/2023</td>
                    <td><View /></td>
                </tr>
                <tr className='border-t py-4'>
                    <td>2</td>
                    <td>Laptops</td>
                    <td>400</td>
                    <td className='text-red-500'>Rejected</td>
                    <td>Ayobami Paul</td>
                    <td>22/05/2023</td>
                    <td><View /></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentRequest