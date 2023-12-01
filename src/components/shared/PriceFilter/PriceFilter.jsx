/* eslint-disable react/prop-types */
import { useState } from 'react';

const PriceFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('');

  const handleFilterChange = () => {
    // Split the price range and send it to the parent component
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      onFilterChange({ minPrice, maxPrice });
    }
  };

  return (
    <div className="space-y-1 text-sm">
      <label htmlFor="price" className="block text-gray-600">
        Price Range
      </label>
      <input
        className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md "
        name="price"
        id="price"
        placeholder="Price Range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        onBlur={handleFilterChange} // Trigger filter change on blur
      />
    </div>
  );
};

export default PriceFilter;
