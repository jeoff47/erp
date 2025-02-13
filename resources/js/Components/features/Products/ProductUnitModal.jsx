import React from 'react';
import BaseUnitSelect from './BaseUnitSelect';


const ProductUnitModal = ({ isOpen, onClose, formData, onChange, onSubmit }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Product Information</h3>
        
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block font-medium text-sm">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter product name"
              className="border-2 p-2 rounded-md w-full"
            />
          </div>

          {/* Short Name Input */}
          <div>
            <label className="block font-medium text-sm">Short Name:</label>
            <input
              type="text"
              name="shortName"
              value={formData.shortName}
              onChange={onChange}
              placeholder="Enter short name"
              className="border-2 p-2 rounded-md w-full"
            />
          </div>

          {/* Base Unit Dropdown */}
          <BaseUnitSelect 
            value={formData.baseUnit} 
            onChange={onChange} 
          />
        </div>

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            className="bg-gray-300 text-black p-2 rounded-md"
            onClick={onClose} // Close the modal without saving
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductUnitModal