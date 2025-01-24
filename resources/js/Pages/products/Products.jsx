import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import SecondaryButton from '@/Components/SecondaryButton';
import SearchBar from "@/Components/SearchBar";
import Table from "../../Components/Table";
import ProductData from "../../Data/ProductData";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on the search term
  const filteredData = ProductData.data.filter((item) =>
    ProductData.columns.some((col) =>
      item[col.accessor]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  return (
    <div className='p-4 '>Products
      <div className=" items-center space-x-4">
        <div className="flex justify-between align-middle">
          {/* Search Bar */}
          <div className="flex-grow">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-96"/>
          </div>

          {/* Filter Icon and Action Buttons */}
          <div className="flex items-center space-x-4 pl-75 flex-grow">
            {/* Filter Icon */}
            <SecondaryButton className="w-auto size-10 px-4 py-4 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              <FaFilter className="font-medium" />
            </SecondaryButton>

            {/* Action Buttons */}
            <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              Export Product
            </SecondaryButton>
            <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              Import Product
            </SecondaryButton>
            <SecondaryButton className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              Create Product
            </SecondaryButton>
          </div>
        </div>

        </div>
        <Table columns={ProductData.columns} data={filteredData} />
        
      </div>
      
      
    
  )
}

export default Products