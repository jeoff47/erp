import PrimaryButton from '@/Components/PrimaryButton'
import ProductCategoryTable from '@/Components/table/ProductCategoryTable'
import Layout from '@/Layouts/LayOut'
import React, { useState } from "react";
import axios from "axios";
import FilterButton from "@/Components/FilterButton";
import ExportOptions from "@/Components/ExportOptions";
import ImportCreateButtons from "@/Components/ImportCreateButtons";
import Table from "../../Components/Table";
import SearchBar from "@/Components/SearchBar";
import FilterModal from "@/Components/FilterModal"; // Import FilterModal


const ProductCategories = () => {
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
    
    <Layout>

    <div className='p-4'>
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
      <div>
        <ProductCategoryTable/>
      </div>
    </div>
    </Layout>
    
  )
}

export default ProductCategories