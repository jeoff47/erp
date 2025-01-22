import React from 'react'
import Table from '../Table'
import SupplierData from '@/Data/SupplierData'

const SupplierTable = () => {
  return (
    <div className='py-2'>
        <Table columns={SupplierData.columns} data={SupplierData.data}/>
    </div>
  )
}

export default SupplierTable