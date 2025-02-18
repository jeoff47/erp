import { useState, useEffect, useCallback } from 'react';
import CreateButton from '@/Components/CreateButton';
import FilterButton from '@/Components/FilterButton';
import FilterModal from '@/Components/FilterModal';
import SearchBar from '@/Components/SearchBar';
import Table from '@/Components/Table';
import LayOut from '@/Layouts/LayOut';
import UnitData from '@/Data/UnitData';
import CreateUnitsModal from '@/Components/features/Products/CreateUnitsModal';

const Units = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(UnitData.data);

    const handleCreateUnits = useCallback(() => {
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
                    value.toString().toLowerCase().includes(searchValue)
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
        setFilteredData(applyFilters(UnitData.data, filters, searchTerm));
    }, [filters, searchTerm]);

    return (
        <LayOut>
            <div className="p-4">
                <h1>Unit</h1>
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
                        <CreateButton onCreate={handleCreateUnits}>
                            Create Unit
                        </CreateButton>
                    </div>
                </div>

                {/* Units Table */}
                <div>
                    <Table columns={UnitData.columns} data={filteredData} />
                </div>
            </div>

            {/* Modal for creating Unit */}
            <CreateUnitsModal isOpen={isModalOpen} closeModal={closeModal} />

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterModalOpen}
                closeModal={() => setIsFilterModalOpen(false)}
                columns={UnitData.columns}
                applyFilter={applyFilter}
            />
        </LayOut>
    );
};

export default Units;
