import React from 'react'
import Table from '../Table'
import BaseUnitData from '@/Data/BaseUnitData'

const BaseUnitTable = () => {
  return (
    <div>
       <Table columns={BaseUnitData.columns} data={BaseUnitData.data}/> 
    </div>
  )
}

export default BaseUnitTable