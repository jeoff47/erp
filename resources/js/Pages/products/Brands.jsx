import BrandTable from '@/Components/table/BrandTable'
import React from 'react'

const Brands = () => {
  return (
    <div>Brands
      <div>
        <PrimaryButton  className="bg-orange-400"> Create Brand</PrimaryButton>
      </div>
      <div>
        <BrandTable/>
      </div>
    </div>
  )
}

export default Brands