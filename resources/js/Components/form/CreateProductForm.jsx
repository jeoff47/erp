import React from 'react'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { Link, usePage } from '@inertiajs/react'



const CreateProductForm = () => {
  const user = usePage().props.auth.user;

  return (
    <div className="px-6 py-2">
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Create Product</h1>
        <Link to="/Products">
          <PrimaryButton className="ml-auto">Back</PrimaryButton>
        </Link>
      </div>

      <form action="" className="p-4 bg-white w-full shadow-lg rounded-lg space-y-4 
            max-w-4xl mx-auto border-2 border-gray-200">
        {/* Product Information Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block font-medium">Name:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Name</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Code:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Code</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Product Category:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose Product Category</InputLabel>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Brand:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose Brand</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Barcode Symbology:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose Barcode Symbology</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Sale Unit:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose Sale Unit</InputLabel>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Purchase Unit:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose Purchase Unit</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Quantity Limitation:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Quantity Limitation</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Note:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Note</InputLabel>
          </div>

          <div className="space-y-2 col-span-full">
            <label className="block font-medium">Multiple Images:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Choose files</InputLabel>
          </div>

          {/* Add Stock Section */}
          <h1 className="font-semibold text-lg mt-6 col-span-full">Add Stock:</h1>

          <div className="space-y-2">
            <label className="block font-medium">Warehouse:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Name</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Supplier:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Name</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Status:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Name</InputLabel>
          </div>
        </div>

        {/* Product Type */}
        <div className="space-y-2">
          <label className="block font-medium">Product Type:</label>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Single</InputLabel>
        </div>

        {/* Pricing & Stock Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block font-medium">Product Cost:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Product Cost</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Product Price:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Product Price</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Stock Alert:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Stock Alert</InputLabel>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Order Tax:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Order Tax</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Tax Type:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Exclusive</InputLabel>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Add Product Quantity:</label>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md" required>Enter Quantity</InputLabel>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
          <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
        </div>
      </form>
    </div>
  )
}

export default CreateProductForm;
