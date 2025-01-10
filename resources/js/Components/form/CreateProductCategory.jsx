import React from 'react'
import SecondaryButton from '../SecondaryButton'
import { IoMdClose } from "react-icons/io";
import InputLabel from '../InputLabel';

const CreateProductCategory = () => {
  return (
    <div>
        <form action="" className='flex'>
            <div>
                <h1>Create Product Category</h1>
                <SecondaryButton><IoMdClose /></SecondaryButton>
            </div>
            <div>
                <div>
                    <span>Name:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
                </div>
                <div>
                    {/* icon to import image */}
                    <span>Change Logo:</span>
                    <InputLabel>Enter Name</InputLabel>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
                    <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
                  </div>
            </div>
        </form>
    </div>
  )
}

export default CreateProductCategory