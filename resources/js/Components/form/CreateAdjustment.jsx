import React from 'react'
import InputLabel from '../InputLabel'
import ProductData from '@/Data/ProductData'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import Table from '../Table'

const CreateAdjustment = () => {
  return (
    <div className='p-6 w-3/4'>
        <form action="" className='bg-white rounded-sm p-4 w-fit'>
            <div className='flex space-x-6'>
                <div>
                    <h2>Warehouse:</h2>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Warehouse</InputLabel>
                </div>
                <div className='space-x-6 mx-2'>
                    <h2>Date:</h2>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">25-09-2025</InputLabel>
                </div>
            </div>
            <div>
                <h2>Product:</h2>
                <InputLabel className="border-2 border-gray-200 p-2 rounded-md"> Search Product by Code Name</InputLabel>
            </div>
            <div>
                <h2>Order Items</h2>
                <Table columns={ProductData.columns} data={ProductData.data}/>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 content-end">
                <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
                <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton> {/* Updated the Cancel button to SecondaryButton */}
            </div>
        </form>
    </div>
  )
}

export default CreateAdjustment