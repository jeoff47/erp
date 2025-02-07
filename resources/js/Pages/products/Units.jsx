import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import UnitTable from '@/Components/table/UnitTable'
import LayOut from '@/Layouts/LayOut'


const Units = () => {
  return (
    
    <LayOut>

    <div className='p-6'>
      <div>
        <PrimaryButton className='bg-orange-400'>Create Product Category</PrimaryButton>
      </div>
      <div>
        <UnitTable/>
      </div>
    </div>
    </LayOut>
   
  )
}

export default Units