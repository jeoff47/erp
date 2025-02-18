import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import CreateButton from '@/Components/CreateButton';
import ExportOptions from '@/Components/ExportOptions';
import CreateBrandsModal from '@/Components/features/Products/CreateBrandsModal';
import FilterButton from '@/Components/FilterButton';
import FilterModal from '@/Components/FilterModal';
import ImportCreateButtons from '@/Components/ImportCreateButtons';
import SearchBar from '@/Components/SearchBar';
import Table from '@/Components/Table';
import BrandsData from '@/Data/BrandsData';
import LayOut from '@/Layouts/LayOut';


const Brands = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('csv');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(BrandsData.data);

    const handleCreateBrands = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

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
                type:
                    selectedFormat === 'csv'
                        ? 'text/csv'
                        : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                selectedFormat === 'csv' ? 'data.csv' : 'data.xlsx'
            );
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    };

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
        setFilteredData(applyFilters(BrandsData.data, filters));
    }, [filters]);

    return (
        <LayOut>
            <div className="p-4">
                <h1>Brands</h1>
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
                        <ImportCreateButtons />
                        <CreateButton onCreatebtn={handleCreateBrands}>
                            Create Brands
                        </CreateButton>
                    </div>
                </div>

                {/* Brands Table */}
                <div>
                    <Table columns={BrandsData.columns} data={filteredData} />
                </div>
            </div>

            {/* Modal for creating product category */}
            <CreateBrandsModal isOpen={isModalOpen} closeModal={closeModal} />

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterModalOpen}
                closeModal={() => setIsFilterModalOpen(false)}
                columns={BrandsData.columns}
                applyFilter={applyFilter}
            />
        </LayOut>
    );
};

export default Brands
