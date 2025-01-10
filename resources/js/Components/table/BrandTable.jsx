import BrandsData from '@/Data/BrandsData'
import React from 'react'
import Table from '../Table'

const BrandTable = () => {
  return (
    <div>
        <Table columns={BrandsData.columns} data={BrandsData.data}/>
    </div>
  )
}

export default BrandTable