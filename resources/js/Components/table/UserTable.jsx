import React from 'react'
import Table from '../Table'
import { UserData } from '@/Data/UserData'

const UserTable = () => {
    return (
        <div className='py-2'>
            <Table columns={UserData.columns} data={UserData.data}/>
        </div>
      )
}

export default UserTable