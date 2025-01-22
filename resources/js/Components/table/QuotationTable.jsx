import Table from '../Table'
import React from 'react'
import QuotationData from '@/Data/QuotationData'

const QuotationTable = () => {
  return (
    <div className='py-2'>
        <Table columns={QuotationData.columns} data={QuotationData.data}/>
    </div>
  )
}

export default QuotationTable