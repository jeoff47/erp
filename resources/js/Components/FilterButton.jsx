import React from "react";
import { FaFilter } from "react-icons/fa";

const FilterButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      <FaFilter />
    </button>
  );
};

export default FilterButton;
