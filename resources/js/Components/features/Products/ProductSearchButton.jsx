import React from 'react'

const ProductSearchButton = () => {
  const [searchTerm, setSearchTerm] = useState(''); // To store the search input
  const [filteredData, setFilteredData] = useState(data); // Filtered data based on search

  // Handle the search functionality
  const handleSearch = () => {
    const result = data.filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
  };
  return (
    <div>ProductSearchButton</div>
  )
}

export default ProductSearchButton