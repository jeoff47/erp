import BaseUnitTable from '@/Components/table/BaseUnitTable'
import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'

const BaseUnit = () => {
  return (
    <div>
      <div>
      <PrimaryButton  className="bg-orange-400"> Create Base Unit</PrimaryButton>
      </div>
      <div>
        <BaseUnitTable/>
      </div>
    </div>
  )
}

export default BaseUnit