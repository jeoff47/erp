import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import LayOut from '@/Layouts/LayOut'


const PurchasesReturn = () => {
  return (
  
    <LayOut>

    <div>
      <div>
      <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton>Select date</PrimaryButton>
          <PrimaryButton> Create Purchase</PrimaryButton>
        </div>
      </div>
      <span className=' w-full justify-center'>There are no product</span>
    </div>
    </div>
    </div>
    </LayOut>
   
  )
}

export default PurchasesReturn