import ExportOptions from '@/Components/ExportOptions';
import FilterButton from '@/Components/FilterButton';
import FilterModal from '@/Components/FilterModal';
import ImportCreateButtons from '@/Components/ImportCreateButtons';
import SearchBar from '@/Components/SearchBar';
import Table from '@/Components/Table';
import ProductCategoryData from '@/Data/ProductCategoryData';
import Layout from '@/Layouts/LayOut';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CreateProductCategoryModal from '../../Components/features/Products/CreateProductCategoriesModal';
import CreateButton from '@/Components/CreateButton';

const ProductCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('csv');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState([]);

    const handleCreateProductCategory = () => {
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

    const filteredData = applyFilters(ProductCategoryData.data, filters);

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
        <Layout>
            <div className="p-4">
                <h1>Product Categories</h1>
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
                        <ImportCreateButtons onCreateProduct={handleCreateProductCategory} />
                        <CreateButton onCreatebtn={handleCreateProductCategory}>Create Product Category</CreateButton>
                    </div>
                </div>

                {/* Product Category Table */}
                <div>
                    <Table columns={ProductCategoryData.columns} data={filteredData} />
                </div>
            </div>

            {/* Modal for creating product category */}
            <CreateProductCategoryModal isOpen={isModalOpen} closeModal={closeModal} />

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterModalOpen}
                closeModal={() => setIsFilterModalOpen(false)}
                columns={ProductCategoryData.columns} // Pass the columns from the product data
                applyFilter={applyFilter}
            />
        </Layout>
    );
};

export default ProductCategories;
