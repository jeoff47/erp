import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import QuotationTable from '@/Components/table/QuotationTable'
import LayOut from '@/Layouts/LayOut'



const Purchases = () => {
  return (
    
    <LayOut>

    <div>
      <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton>Select date</PrimaryButton>
          <PrimaryButton> Create Purchase</PrimaryButton>
        </div>
      </div>
      <QuotationTable/>
    </div>
    </div>
    </LayOut>
    
  )
}

export default Purchases