import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton';
import { FaTrashAlt } from "react-icons/fa";

const CreateVariation = () => {
  return (
    <div>
        <form action="">
            <div>
                <h1>Create Variation</h1>
                <SecondaryButton><IoMdClose /></SecondaryButton>
            </div>
            <div>
                <div>
                    <span>Name:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
                </div>
                <div>
                    {/* icon to import image */}
                    <span>Variation Type:</span>
                    <div className='flex'>
                        <InputLabel className='p-1 flex'>Please enter variation type</InputLabel>
                        <PrimaryButton>
                            <FaPlus />
                        </PrimaryButton>
                    </div>
                    <div>
                        <InputLabel className='p-1 flex'>Please enter variation type</InputLabel>
                        <PrimaryButton>
                            <FaTrashAlt />
                        </PrimaryButton>
                    </div>
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

export default CreateVariation