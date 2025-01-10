import PrimaryButton from '@/Components/PrimaryButton'
import VariationTable from '@/Components/table/VariationTable'
import React from 'react'

const Variation = () => {
  return (
    <div className='p-6'>
      <div>
        <PrimaryButton  className="bg-orange-400">Create Variation</PrimaryButton>
      </div>
      <div>
        <VariationTable/>
      </div>

    </div>
  )
}

export default Variation