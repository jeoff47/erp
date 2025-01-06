import React, { useState, useEffect } from 'react';
import { ProductData } from '@/Data/ProductData'; // Make sure ProductData is imported correctly

const RealTimeSearchWithDebounce = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ProductData); // Initialize with ProductData
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce the search query with a delay of 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    // Cleanup function to cancel previous timeout
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter the data based on the debounced search query
  useEffect(() => {
    if (debouncedSearchQuery === '') {
      setFilteredData(ProductData); // If the search query is empty, show all products
    } else {
      const results = ProductData.filter(item =>
        item.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setFilteredData(results); // Update the filtered data
    }
  }, [debouncedSearchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} // Update search query on input change
        className="p-2 border border-gray-300 rounded"
      />
      <ul className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => <li key={item.id} className="p-2">{item.name}</li>)
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default RealTimeSearchWithDebounce;
