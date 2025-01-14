import AdjustmentData from '@/Data/AdjustmentData'
import Table from '../Table'
import React from 'react'

const AdjustmentsTable = () => {
  return (
    <div className='py-2'>
        <Table columns={AdjustmentData.columns} data={AdjustmentData.data}/>
    </div>
  )
}

export default AdjustmentsTable