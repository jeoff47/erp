import React, { useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import SearchBar from '@/Components/SearchBar'
import Layout from '@/Layouts/LayOut'
import CreateProductCategoryModal from '../../Components/features/Products/CreateProductCategoriesModal'
import FilterButton from '@/Components/FilterButton'
import ImportCreateButtons from '@/Components/ImportCreateButtons'

const ProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false) // Manage modal state
  
  const handleCreateProductCategory = () => {
    setIsModalOpen(true) // Open the modal when the button is clicked
  }

  const closeModal = () => {
    setIsModalOpen(false) // Close the modal
  }

  const handleFilterClick = () => {
    setIsFilterModalOpen(true); // Open the filter modal
  };
 

  return (
    <Layout>
      <div className='p-4'>
        {/* Create Button */}
        <h1>Product Categories</h1>
        <div className="flex items-center space-x-4">
        <div className="flex-grow">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-96" />
          </div>
          <div className="flex items-center space-x-4">
            <FilterButton onClick={handleFilterClick} /> {/* Trigger filter modal */}
            
            <ImportCreateButtons onCreateProduct={handleCreateProductCategory} />
          </div>
        </div>
        <div>
          <PrimaryButton
            className='bg-orange-400 hover:bg-orange-500 transition-colors duration-300'
            onClick={handleCreateProductCategory}
          >
            Create Product Category
          </PrimaryButton>
        </div>

        {/* Product Category Table */}
        <div>
          
        </div>
      </div>

      {/* Modal for creating product category */}
      <CreateProductCategoryModal
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Layout>
  )
}

export default ProductCategories
