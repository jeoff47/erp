import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import PrimaryButton from '../PrimaryButton'; // Assuming you have this component
import SecondaryButton from '../SecondaryButton'; // Added import for SecondaryButton
import InputLabel from '../InputLabel'; // Assuming you have this component

const CreateUnit = () => {
  return (
    <div>
      <form className='bg-white p-4 rounded'>
        <div className='flex'> 
          <h1 className='space-x-14'>Create Unit</h1>
          <SecondaryButton><IoMdClose /></SecondaryButton>
        </div>
        <div>
          <div>
            <span>Name:</span>
            <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
          </div>
          <div className='py-4'>
            <span>Variation Type:</span>
            <div className='flex'>
              <InputLabel className='flex border-2 border-gray-200 p-4 rounded-md'>Please enter variation type</InputLabel>
              <PrimaryButton>
                <FaPlus />
              </PrimaryButton>
            </div>
            <div className='py-2'>
              <InputLabel className='flex border-2 border-gray-200 p-4 rounded-md'>Please enter variation type</InputLabel>
              <PrimaryButton>
                <FaTrashAlt />
              </PrimaryButton>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
            <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton> {/* Updated the Cancel button to SecondaryButton */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUnit;
