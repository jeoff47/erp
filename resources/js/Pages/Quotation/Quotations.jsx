import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import QuotationTable from '@/Components/table/QuotationTable'

const Quotations = () => {
  return (
    <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton>Select date</PrimaryButton>
          <PrimaryButton> Create Quotation</PrimaryButton>
        </div>
      </div>
      <QuotationTable/>
    </div>

  )
}

export default Quotations