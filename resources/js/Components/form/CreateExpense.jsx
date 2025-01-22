import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import InputLabel from '../InputLabel'
import { IoMdClose } from "react-icons/io";

const CreateExpense = () => {
  return (
    <div className='p-6 w-full'>
        <div className='flex py-2'>
            <h1>Create Expenses</h1>
            <SecondaryButton><IoMdClose /></SecondaryButton>
        </div>
        <form action="" className='bg-white p-2 flex'>
            <div className=''>
                <span>Date:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    25-01-2023
                </InputLabel>
            </div>
            <div>
                <span>Expense Title:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    Enter Expense Title
                </InputLabel>
            </div>
            <div>
                <span>Warehouse:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    Choose Warehouse
                </InputLabel>
            </div>
            <div>
                <span>Expense Category:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    Choose Expense Category
                </InputLabel>
            </div>
            <div>
                <span>Amount:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    Enter Amount
                </InputLabel>
            </div>
            <div>
                <span>Detail:</span>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                    Enter Details
                </InputLabel>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
               <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
                <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
            </div>
        </form>
    </div>
  )
}

export default CreateExpense