// ProductUnitInput.js
import React from 'react';

const ProductUnitInput = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <label className="block font-medium text-sm">Product Unit:</label>
      <input
        type="text"
        name="purchaseUnit"
        placeholder="Purchase Unit"
        value={value}
        onChange={onChange}
        className={`border-2 p-2 rounded-md w-full ${error ? "border-red-500" : "border-gray-200"}`}
      />
      {error && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default ProductUnitInput;
