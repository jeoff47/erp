import React from 'react'
import Table from '../Table'
import { RoleData } from '@/Data/RoleData'

const RolesTable = () => {
  return (
    <Table columns={RoleData.columns} data={RoleData.data}/>
  )
}

export default RolesTable