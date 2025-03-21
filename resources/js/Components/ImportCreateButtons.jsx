import React from "react";
import SecondaryButton from "@/Components/SecondaryButton";

const ImportCreateButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
        Import Product
      </SecondaryButton>
    </div>

  );
};

export default ImportCreateButtons;
