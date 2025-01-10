import React from 'react'
import Table from '../Table'
import VariationData from '@/Data/VariationData'

const VariationTable = () => {
  return (
    <div>
      <Table columns={VariationData.columns} data={VariationData.data}/>
    </div>
  )
}

export default VariationTable