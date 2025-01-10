import React from 'react'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const CreateProductForm = () => {
  return (
    <div className="p-6">
  <div className="flex w-full justify-between items-center mb-6">
    <h1 className="text-xl font-semibold">Create Product</h1>
    <PrimaryButton className="ml-auto">Back</PrimaryButton>
  </div>

  <form action="" className="p-4 bg-white shadow-lg rounded-lg space-y-4 max-w-4xl mx-auto border-2 border-gray-200">
  <div className="space-y-4">
    <div className="rounded-md">
      <span className="block font-medium">Name:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Code:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Code</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Product Category:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Product Category</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Brand:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Brand</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Barcode Symbology:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Barcode Symbology</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Sale Unit:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Sale Unit</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Purchase Unit:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose Purchase Unit</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Quantity Limitation:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Quantity Limitation</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Note:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Note</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Multiple Image:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Choose files</InputLabel>
    </div>

    <h1 className="font-semibold text-lg mt-6">Add Stock:</h1>
    <div >
      <span className="block font-medium">Warehouse:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Supplier:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Status:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
    </div>
  </div>

  <div className="space-y-4">
    <div >
      <span className="block font-medium">Product Type:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">single</InputLabel>
    </div>
  </div>

  <div className="space-y-4">
    <div >
      <span className="block font-medium">Product Cost:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Product Cost</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Product Price:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Product Price</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Stock Alert:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Stock Alert</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Order Tax:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Order Tax</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Tax Type:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Exclusive</InputLabel>
    </div>
    <div >
      <span className="block font-medium">Add Product Quantity:</span>
      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Add Product Quantity</InputLabel>
    </div>
  </div>

  <div className="mt-6 flex flex-col sm:flex-row gap-4">
    <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
    <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
  </div>
 </form>


</div>

  )
}

export default CreateProductForm