import React, { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";

const FilterModal = ({ isOpen, closeModal, columns, applyFilter }) => {
  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.accessor || "");  // Default to the first column if available
  const [filterValue, setFilterValue] = useState("");
  const [filterCondition, setFilterCondition] = useState("contains");

  const handleApplyFilter = () => {
    if (!filterValue) {
      alert("Please provide a filter value.");
      return;
    }
    if (!selectedColumn) {
      alert("Please select a column.");
      return;
    }

    // Apply the filter by passing the selected column, condition, and value
    applyFilter(selectedColumn, filterCondition, filterValue);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-xl mb-4">Filter Products</h2>

        {/* Column Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Select Column</label>
          <select
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            aria-label="Select filter column"
          >
            {columns.map((col) => (
              <option key={col.accessor} value={col.accessor}>
                {col.Header}
              </option>
            ))}
          </select>
        </div>

        {/* Condition Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Condition</label>
          <select
            value={filterCondition}
            onChange={(e) => setFilterCondition(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            aria-label="Select filter condition"
          >
            <option value="contains">Contains</option>
            <option value="equals">Equals</option>
            <option value="startsWith">Starts With</option>
            <option value="endsWith">Ends With</option>
          </select>
        </div>

        {/* Filter Value */}
        <div className="mb-4">
          <label className="block mb-2">Filter Value</label>
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            aria-label="Enter filter value"
          />
        </div>

        <div className="flex justify-between">
          <SecondaryButton onClick={closeModal} className="bg-gray-200">
            Cancel
          </SecondaryButton>
          <SecondaryButton onClick={handleApplyFilter} className="bg-blue-200">
            Apply Filter
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
