import React from 'react'
import Table from '../Table'
import UnitData from '@/Data/UnitData'


const UnitTable = () => {
  return (
    <div>
        <Table columns={UnitData.columns} data={UnitData.data}/>
    </div>
  )
}

export default UnitTable