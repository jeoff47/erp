import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import LayOut from '@/Layouts/LayOut'


const ExpensesCategories = () => {
  return (
    
    <LayOut>

    <div className='p-6'>
      <div>
          <div>
            <div>
              <PrimaryButton></PrimaryButton>
              <PrimaryButton>Select date</PrimaryButton>
              <PrimaryButton> Create Expense Categories</PrimaryButton>
            </div>
          </div>
          <span className=' w-full justify-center'>There are no product</span>
        </div>
    </div>
    </LayOut>
  
    
  )
}

export default ExpensesCategories