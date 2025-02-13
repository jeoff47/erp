import React, { useState } from "react";
import axios from "axios";
import FilterButton from "@/Components/FilterButton";
import ExportOptions from "@/Components/ExportOptions";
import ImportCreateButtons from "@/Components/ImportCreateButtons";
import Table from "../../Components/Table";
import ProductData from "../../Data/ProductData";
import LayOut from "@/Layouts/LayOut";
import CreateProductModal from "@/Components/features/Products/CreateProductModal";
import SearchBar from "@/Components/SearchBar";
import FilterModal from "@/Components/FilterModal"; // Import FilterModal

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // Manage filter modal visibility
  const [filters, setFilters] = useState([]); // To store applied filters

  const handleExport = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000?format=${selectedFormat}`,
        { responseType: "blob" }
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

  const filteredData = ProductData.data.filter((item) => {
    return filters.every((filter) => {
      const value = item[filter.column]?.toString().toLowerCase() || "";
      const filterValue = filter.value.toLowerCase();
      switch (filter.condition) {
        case "contains":
          return value.includes(filterValue);
        case "equals":
          return value === filterValue;
        case "startsWith":
          return value.startsWith(filterValue);
        case "endsWith":
          return value.endsWith(filterValue);
        default:
          return true;
      }
    });
  });

  const handleCreateProduct = () => {
    setIsModalOpen(true); // Open the Create Product Modal
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true); // Open the filter modal
  };

  const applyFilter = (column, condition, value) => {
    setFilters((prevFilters) => [
      ...prevFilters,
      { column, condition, value },
    ]);
  };

  return (
    <LayOut>
      <div className="p-4">
        <h1>Products</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex-grow">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-96" />
          </div>

          {/* Filter and Action Buttons */}
          <div className="flex items-center space-x-4">
            <FilterButton onClick={handleFilterClick} /> {/* Trigger filter modal */}
            <ExportOptions
              selectedFormat={selectedFormat}
              setSelectedFormat={setSelectedFormat}
              onExport={handleExport}
            />
            <ImportCreateButtons onCreateProduct={handleCreateProduct} />
          </div>
        </div>

        {/* Table Component */}
        <Table columns={ProductData.columns} data={filteredData} />
      </div>

      {/* Modal for Create Product */}
      <CreateProductModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

      {/* Filter Modal */}
      <FilterModal
  isOpen={isFilterModalOpen}
  closeModal={() => setIsFilterModalOpen(false)}
  columns={ProductData.columns} // Pass the columns from the product data
  applyFilter={applyFilter}
/>

    </LayOut>
  );
};

export default Products;
