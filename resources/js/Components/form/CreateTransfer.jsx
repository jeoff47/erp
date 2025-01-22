import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import InputLabel from '../InputLabel'
import Table from '../Table'
import QuotationData from '@/Data/QuotationData'

const CreateTransfer = () => {
  return (
  <div className="p-6">
    <div className="flex w-full justify-between items-center mb-6">
      <h1 className="text-xl font-semibold">Create Purchase</h1>
      <PrimaryButton className="ml-auto">Back</PrimaryButton>
    </div>

    <form action="" className="p-4 bg-white shadow-lg rounded-lg space-y-4 max-w-4xl mx-auto border-2 border-gray-200">
      <div className="space-y-4">
        <div className="rounded-md">
          <span className="block font-medium">Date:</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">25-09-2025</InputLabel>
        </div>
        <div >
          <span className="block font-medium"> From Warehouse:</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Code</InputLabel>
        </div>
      </div>
      <div className='space-y-4'>
        <div >
          <span className="block font-medium">To WareHouse</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">search a product by code</InputLabel>
        </div>
      </div>
      <div>
        <span>Order Items</span>
        {/**remember to update the column that fit for this table */}
        <Table columns={QuotationData.columns} data={QuotationData.data}/>
      </div>
      <div>
        <div className='flex border-2 border-gray-200'>
          <span>Order Tax</span>
          {/** enter percentage */}
          <span>{'00.00(00.00)%'}</span>
        </div>
        <div className='flex border-2 border-gray-200'>
          <span>Discount</span>
          {/** enter amount */}
          <span>{'00.00(00.00)'}</span>
        </div>
        <div className='flex border-2 border-gray-200'>
          <span>Shipping</span>
          {/** enter amount */}
          <span>{'00.00(00.00)'}</span>
        </div>
        <div className='flex border-2 border-gray-200'>
          <span>Grand Total</span>
          {/** enter amount */}
          <span>{'00.00(00.00)'}</span>
        </div>
      </div>
      <div className='flex'>
        <div >
          <span className="block font-medium">Order Tax</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            0.00
          <span className="block font-medium">%</span>
          </InputLabel>
        </div>
        <div >
          <span className="block font-medium">Order Tax</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            0.00
          <span className="block font-medium">{'%'}</span>
          </InputLabel>
        </div>
        <div >
          <span className="block font-medium">Discount</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            0.00
          <span className="block font-medium">MK</span>
          </InputLabel>
        </div>
        <div >
          <span className="block font-medium">Shipping</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            0.00
          <span className="block font-medium">MK</span>
          </InputLabel>
        </div>
        <div >
          <span className="block font-medium">Status</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            0.00
          <span className="block font-medium">{'%'}</span>
          </InputLabel>
        </div>
      </div>
      <div >
          <span className="block font-medium">Notes</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
            
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

export default CreateTransfer