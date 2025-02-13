// BaseUnitSelect.js
import React from 'react';

const BaseUnitSelect = ({ value, onChange }) => {
  return (
    <div>
      <label className="block font-medium text-sm">Base Unit:</label>
      <select
        name="baseUnit"
        value={value}
        onChange={onChange}
        className="border-2 p-2 rounded-md w-full"
      >
        <option value="">Select a unit</option>
        <option value="kg">Kilogram</option>
        <option value="g">Gram</option>
        <option value="l">Liter</option>
        <option value="ml">Milliliter</option>
        <option value="pcs">Pieces</option>
      </select>
    </div>
  );
};

export default BaseUnitSelect;
