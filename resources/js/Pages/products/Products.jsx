import React, { useState } from "react";
import axios from "axios"; // Import axios
import { FaFilter } from "react-icons/fa";
import SecondaryButton from "@/Components/SecondaryButton";
import SearchBar from "@/Components/SearchBar";
import Table from "../../Components/Table";
import ProductData from "../../Data/ProductData";
import { Link } from "@inertiajs/react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("csv"); // Default to CSV

  const handleExport = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000?format=${selectedFormat}`,
        {
          responseType: "blob", // Ensure the response is a file (blob)
        }
      );

      const blob = new Blob([response.data], {
        type:
          selectedFormat === "csv"
            ? "text/csv"
            : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", selectedFormat === "csv" ? "data.csv" : "data.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  // Filter the data based on the search term
  const filteredData = ProductData.data.filter((item) =>
    ProductData.columns.some((col) =>
      item[col.accessor]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <h1>Products</h1>
      <div className="flex justify-between items-center space-x-4">
        {/* Search Bar */}
        <div className="flex-grow">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-96" />
        </div>

        {/* Filter Icon and Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Filter Icon */}
          <SecondaryButton className="w-12 h-12 flex justify-center items-center text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
            <FaFilter className="font-medium" />
          </SecondaryButton>

          {/* Export Format and Buttons */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="bg-gray-200 text-sm px-4 py-2 rounded-md"
            >
              <option value="csv">CSV</option>
              <option value="xlsx">Excel</option>
            </select>
            <SecondaryButton
              onClick={handleExport}
              className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
            >
              Export Data
            </SecondaryButton>
          </div>

          {/* Additional Action Buttons */}
          <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
            Import Product
          </SecondaryButton>

          <Link href="/CreateProductForm">
            <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              Create Product
            </SecondaryButton>
          </Link>
        </div>
      </div>

      {/* Table Component */}
      <Table columns={ProductData.columns} data={filteredData} />
    </div>
  );
};

export default Products;
