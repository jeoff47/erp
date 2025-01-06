import ProductSearchButton from '@/Components/Products/ProductSearchButton'
import ProductsTable from '@/Components/Products/ProductsTable'
import React from 'react'

const Products = () => {
  return (
    <div className='p-4'>Products
      <div className="flex">
        <ProductSearchButton/>
        
      </div>
      <ProductsTable/>
    </div>
  )
}

export default Products