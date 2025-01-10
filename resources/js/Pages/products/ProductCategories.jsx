import PrimaryButton from '@/Components/PrimaryButton'
import ProductCategoryTable from '@/Components/table/ProductCategoryTable'
import React from 'react'

const ProductCategories = () => {
  return (
    <div className='p-6'>
      <div>
        <PrimaryButton className='bg-orange-400'>Create Product Category</PrimaryButton>
      </div>
      <div>
        <ProductCategoryTable/>
      </div>
    </div>
  )
}

export default ProductCategories