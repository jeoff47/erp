import PrimaryButton from '@/Components/PrimaryButton'
import AdjustmentsTable from '@/Components/table/AdjustmentsTable'
import React from 'react'

const Adjustments = () => {
  return (
    <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton> Create Adjustments</PrimaryButton>
        </div>
      </div>
      <AdjustmentsTable/>
    </div>
  )
}

export default Adjustments