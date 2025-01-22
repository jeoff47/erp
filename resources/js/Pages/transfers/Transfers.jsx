import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import QuotationData from '@/Data/QuotationData'

const Transfers = () => {
  return (
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
  )
}

export default Transfers