import PrimaryButton from '@/Components/PrimaryButton'
import AdjustmentsTable from '@/Components/table/AdjustmentsTable'
import LayOut from '@/Layouts/LayOut'
import React from 'react'

const Adjustments = () => {
  return (
   <LayOut>
    <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton> Create Adjustments</PrimaryButton>
        </div>
      </div>
      <AdjustmentsTable/>
    </div>
   </LayOut>
)
}

export default Adjustments