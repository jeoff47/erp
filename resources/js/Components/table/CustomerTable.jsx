import React from 'react'
import Table from '../Table'
import { CustometData } from '@/Data/CustomerData'
const CustomerTable = () => {
  return (
    <div className='py-2'>
        <Table columns={CustometData.columns} data={CustometData.data}/>
    </div>
  )
}

export default CustomerTable