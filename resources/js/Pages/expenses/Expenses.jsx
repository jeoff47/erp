import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'

const Expenses = () => {
  return (
    <div className='p-6'>
      <div>
          <div>
            <div>
              <PrimaryButton></PrimaryButton>
              <PrimaryButton>Select date</PrimaryButton>
              <PrimaryButton> Create Expense</PrimaryButton>
            </div>
          </div>
          <span className=' w-full justify-center'>There are no product</span>
        </div>
    </div>
  )
}

export default Expenses