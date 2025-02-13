import React from "react";
import SecondaryButton from "@/Components/SecondaryButton";

const ExportOptions = ({ selectedFormat, setSelectedFormat, onExport }) => {
  return (
    <div className="flex items-center space-x-4">
      <select
        value={selectedFormat}
        onChange={(e) => setSelectedFormat(e.target.value)} // Updates selectedFormat
        className="bg-gray-200 text-sm px-8 py-2 rounded-md"
      >
        <option value="csv">CSV</option>
        <option value="xlsx">Excel</option>
      </select>
      <SecondaryButton
        onClick={onExport} // Trigger export functionality
        className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
      >
        Export Data
      </SecondaryButton>
    </div>
  );
};

export default ExportOptions;
