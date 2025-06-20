import React from 'react'
import { CustomerTable, ManageAndTrackCustomers } from '../../components'

function customerManagement() {
  return (
    <div>
      <div className='border border-gray-200 dark:border-customBorderColor rounded-2xl p-6 dark:bg-customBrown'>
        <ManageAndTrackCustomers />
      </div>
      <div className='mt-7 border border-gray-200 dark:border-customBorderColor rounded-2xl dark:bg-customBrown'>
        <CustomerTable />
      </div>
    </div>
  )
}

export default customerManagement
