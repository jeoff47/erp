import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'


const SalesReturn = () => {
  return (
    <div>
      <div>
        <div className='p-6'>
          <div>
            <div>
              <PrimaryButton></PrimaryButton>
              <PrimaryButton>Select date</PrimaryButton>
            </div>
          </div>
          <span className=' w-full justify-center'>There are no product</span>
        </div>
      </div>
    </div>
  )
}

export default SalesReturn