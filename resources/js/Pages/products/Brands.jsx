import BrandTable from '@/Components/table/BrandTable'
import LayOut from '@/Layouts/LayOut'

import React from 'react'

const Brands = () => {
  return (
  
    <LayOut>

    <div>Brands
      <div>
        <PrimaryButton  className="bg-orange-400"> Create Brand</PrimaryButton>
      </div>
      <div>
        <BrandTable/>
      </div>
    </div>
    </LayOut>
    
  )
}

export default Brands