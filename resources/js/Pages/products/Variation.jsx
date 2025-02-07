import PrimaryButton from '@/Components/PrimaryButton'
import VariationTable from '@/Components/table/VariationTable'
import LayOut from '@/Layouts/LayOut'

import React from 'react'

const Variation = () => {
  return (
    
    <LayOut>

    <div className='p-6'>
      <div>
        <PrimaryButton  className="bg-orange-400">Create Variation</PrimaryButton>
      </div>
      <div>
        <VariationTable/>
      </div>

    </div>
    </LayOut>
    
  )
}

export default Variation