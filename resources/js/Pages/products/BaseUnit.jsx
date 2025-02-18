import React, {useState} from 'react';
import LayOut from '@/Layouts/LayOut';
import SearchBar from '@/Components/SearchBar';
import FilterButton from '@/Components/FilterButton';
import ExportOptions from '@/Components/ExportOptions';
import ImportCreateButtons from '@/Components/ImportCreateButtons';
import CreateButton from '@/Components/CreateButton';
import BaseUnitData from '@/Data/BaseUnitData';
import Table from '@/Components/Table';
import CreateBaseUnitModal from '@/Components/features/Products/CreateBaseUnitModal';
import FilterModal from '@/Components/FilterModal';



const BaseUnit = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('csv');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState([]);

    const handleCreateBaseUnit = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFilterClick = () => {
        setIsFilterModalOpen(true);
    };

    const handleExport = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000?format=${selectedFormat}`,
                { responseType: 'blob' }
            );

            const blob = new Blob([response.data], {
                type: selectedFormat === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', selectedFormat === 'csv' ? 'data.csv' : 'data.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    };

    // Filter logic for the table data
    const applyFilters = (data, filters) => {
        return data.filter((item) => {
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
        });
    };

    const filteredData = applyFilters(BaseUnitData.data, filters);

    const applyFilter = (column, condition, value) => {
        setFilters((prevFilters) => {
            // You can choose to replace a filter if already exists or add a new one
            const existingFilter = prevFilters.find((filter) => filter.column === column);
            if (existingFilter) {
                return prevFilters.map((filter) =>
                    filter.column === column ? { ...filter, condition, value } : filter
                );
            }
            return [...prevFilters, { column, condition, value }];
        });
    };
  return (
    <LayOut>
            <div className="p-4">
                <h1>Base Unit</h1>
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
                        <ExportOptions
                            selectedFormat={selectedFormat}
                            setSelectedFormat={setSelectedFormat}
                            onExport={handleExport}
                        />
                        <ImportCreateButtons onCreateProduct={handleCreateBaseUnit} />
                        <CreateButton onCreatebtn={handleCreateBaseUnit}>Create Base unit</CreateButton>
                    </div>
                </div>

                {/* Product Category Table */}
                <div>
                    <Table columns={BaseUnitData.columns} data={filteredData} />
                </div>
            </div>

            {/* Modal for creating product category */}
            <CreateBaseUnitModal isOpen={isModalOpen} closeModal={closeModal} />

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterModalOpen}
                closeModal={() => setIsFilterModalOpen(false)}
                columns={BaseUnitData.columns} // Pass the columns from the product data
                applyFilter={applyFilter}
            />
        </LayOut>
  );
};


export default BaseUnit;
