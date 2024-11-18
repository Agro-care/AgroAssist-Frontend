import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { baseURL } from '../lib';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${baseURL}/api/products`);
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
                
                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);

                // Generate price ranges
                const prices = data.map(product => product.price);
                const minPrice = Math.floor(Math.min(...prices));
                const maxPrice = Math.ceil(Math.max(...prices));
                const range = maxPrice - minPrice;
                const step = Math.ceil(range / 4); // Create 4 price ranges

                const ranges = [];
                for (let i = minPrice; i < maxPrice; i += step) {
                    ranges.push({
                        id: `${i}-${i + step}`,
                        min: i,
                        max: i + step,
                        label: `$${i} - $${i + step}`
                    });
                }
                setPriceRanges(ranges);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [priceRange, selectedCategory]);

    const filterProducts = () => {
        let filtered = [...products];

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            filtered = filtered.filter(product => 
                product.price >= min && product.price <= max
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="product-list-container">
            <div className="filter-section">
                <select 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="filter-dropdown"
                >
                    <option value="all">All Prices</option>
                    {priceRanges.map(range => (
                        <option key={range.id} value={range.id}>
                            {range.label}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-dropdown"
                >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="products-grid">
                {loading ? (
                    <p className="loading-text">Loading products...</p>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            addToCart={addToCart} 
                        />
                    ))
                ) : (
                    <p className="no-products-text">No products match the selected filters</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
