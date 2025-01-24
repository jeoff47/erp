import React from 'react'
import Table from '../Table'
import ProductCategoryData from '../../Data/ProductCategoryData'

const ProductCategoryTable = () => {
  return (
    <div>
      <Table columns={ProductCategoryData.columns} data={ProductCategoryData.data}/>
    </div>
  )
}

export default ProductCategoryTable