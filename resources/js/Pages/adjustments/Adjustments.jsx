import React, { useState, useCallback, useEffect } from 'react';
import CreateButton from '@/Components/CreateButton';
import CreateAdjustmentModal from '@/Components/features/Products/CreateAdjustmentModal';
import FilterButton from '@/Components/FilterButton';
import FilterModal from '@/Components/FilterModal';
import SearchBar from '@/Components/SearchBar';
import Table from '@/Components/Table';
import AdjustmentData from '@/Data/AdjustmentData';
import LayOut from '@/Layouts/LayOut';

const Adjustments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(AdjustmentData.data);

  const handleCreateAdjustment = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const applyFilters = (data, filters, searchTerm) => {
    return data
      .filter((item) => {
        // Apply column filters
        return filters.every((filter) => {
          const value = item[filter.column]?.toString().toLowerCase() || '';
          const filterValue = filter.value.toLowerCase();
          switch (filter.condition) {
            case 'contains':
              return value.includes(filterValue);
            case 'equals':
              return value === filterValue;
            case 'startsWith':
              return value.startsWith(filterValue);
            case 'endsWith':
              return value.endsWith(filterValue);
            default:
              return true;
          }
        });
      })
      .filter((item) => {
        // Apply search term filtering
        const searchValue = searchTerm.toLowerCase();
        return Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(searchValue)
        );
      });
  };

  const applyFilter = useCallback((column, condition, value) => {
    setFilters((prevFilters) => {
      const existingFilter = prevFilters.find((filter) => filter.column === column);
      if (existingFilter) {
        return prevFilters.map((filter) =>
          filter.column === column ? { ...filter, condition, value } : filter
        );
      }
      return [...prevFilters, { column, condition, value }];
    });
  }, []);

  useEffect(() => {
    setFilteredData(applyFilters(AdjustmentData.data, filters, searchTerm));
  }, [filters, searchTerm]);

  return (
    <LayOut>
      <div className="p-4">
        <h1>Adjustments</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              className="w-96"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FilterButton onClick={handleFilterClick} />
            <CreateButton onCreate={handleCreateAdjustment}>
              Create Adjustments
            </CreateButton>
          </div>
        </div>

        {/* Units Table */}
        <div>
          <Table columns={AdjustmentData.columns} data={filteredData} />
        </div>
      </div>

      {/* Modal for creating Unit */}
      <CreateAdjustmentModal isOpen={isModalOpen} closeModal={closeModal} />

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        closeModal={() => setIsFilterModalOpen(false)}
        columns={AdjustmentData.columns}
        applyFilter={applyFilter}
      />
    </LayOut>
  );
};

export default Adjustments;
