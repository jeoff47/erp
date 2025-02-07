import PrimaryButton from '@/Components/PrimaryButton'
import ProductCategoryTable from '@/Components/table/ProductCategoryTable'
import Layout from '@/Layouts/LayOut'
import React from 'react'

const ProductCategories = () => {
  return (
    
    <Layout>

    <div className='p-6'>
      <div>
        <PrimaryButton className='bg-orange-400'>Create Product Category</PrimaryButton>
      </div>
      <div>
        <ProductCategoryTable/>
      </div>
    </div>
    </Layout>
    
  )
}

export default ProductCategories