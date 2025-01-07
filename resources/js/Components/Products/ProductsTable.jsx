import React from 'react'
import Table from '../Table'
import ProductData from '../../Data/ProductData'

const ProductsTable = () => {

  return (
    <div>ProductsTable
      <Table columns={ProductData.columns} data={ProductData.product}/>
    </div>
  )
}

export default ProductsTable