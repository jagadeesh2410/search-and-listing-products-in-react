import React, { useState } from 'react';


const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <label htmlFor="search">Search Products: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={''}/>
            <strong>{product.name}</strong> - ${product.price}
            {
                product.price
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
