import React from 'react'
import { FaFilter } from 'react-icons/fa'
import SecondaryButton from '@/Components/SecondaryButton'
import CustomerTable from '@/Components/table/CustomerTable'
import LayOut from '@/Layouts/LayOut'


const User = () => {
  return (
   
    <LayOut>

    <div className='p-4'>Suppliers
      <div className="items-center space-x-4">
        {/* 
        
        <User SearchButton className='p-2'/>
        User Search Button with spacing to the right */}

        {/* Container for action buttons */}
        <div className='p-2 flex text-sm flex-wrap items-center justify-start space-x-2'>
          {/* Filter Icon */}
          <FaFilter className='p-2 bg-blue-100 mr-2' aria-label="Filter Products" />

          {/* Action Buttons */}
          <SecondaryButton className='px-2'>Export Product</SecondaryButton>
          <SecondaryButton className='px-2'>Import Product</SecondaryButton>
          <SecondaryButton className='px-2'>Create Product</SecondaryButton>
        </div>
        <CustomerTable/>
        
      </div>
      
      
    </div>
    </LayOut>
        
  )
}

export default User