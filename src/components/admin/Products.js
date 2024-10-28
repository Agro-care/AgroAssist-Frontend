import React, { useState } from 'react';
import Papa from 'papaparse';
import './styles.css';
import AddProductModal from './AddProductModal';
import ModifyProductModal from './ModifyProductModal';

const Products = ({ productsData }) => {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({ name: '', country: '', type: '', price: '' });
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modifyModalIsOpen, setModifyModalIsOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [error, setError] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModifyModal = (index) => {
    setSelectedProductIndex(index);
    setNewProduct(products[index]); // Pre-fill the form with the selected product's data
    setModifyModalIsOpen(true);
  };

  const closeModifyModal = () => {
    setModifyModalIsOpen(false);
    setNewProduct({ name: '', country: '', type: '', price: '' });
    setSelectedProductIndex(null);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.country || !newProduct.type || !newProduct.price) {
      setError('All fields are required.');
      return;
    }
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', country: '', type: '', price: '' });
    setError('');
    setModalIsOpen(false);
  };

  const handleSaveChanges = () => {
    if (!newProduct.name || !newProduct.country || !newProduct.type || !newProduct.price) {
      setError('All fields are required.');
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[selectedProductIndex] = newProduct;
    setProducts(updatedProducts);
    closeModifyModal();
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setProducts(result.data.map((row) => ({
          name: row[0] || '',
          country: row[1] || '',
          type: row[2] || '',
          price: row[3] || ''
        })));
      },
    });
  };

  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.country.toLowerCase().includes(search) ||
      product.type.toLowerCase().includes(search) ||
      product.price.toString().includes(search)
  );

  return (
    <div className="products-container">
      <h2 className="section-title">Product List</h2>
      <input type="file" onChange={handleCSVUpload} className="csv-upload" />
      
      <div className="search-form">
        <div className="search-tab">
          <input
            type="text"
            placeholder="Search item ..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="add-product-form">
          <button onClick={openModal} className="btn add-btn">Add Product</button>
        </div>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddProduct={handleAddProduct}
      />

      {/* Modify Product Modal */}
      <ModifyProductModal
        isOpen={modifyModalIsOpen}
        closeModal={closeModifyModal}
        product={newProduct}
        setProduct={setNewProduct}
        handleSaveChanges={handleSaveChanges}
      />

      {error && <p className="error-message">{error}</p>}

      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.country}</td>
              <td>{product.type}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDeleteProduct(index)} className="btn delete-btn">Delete</button>
                <button onClick={() => openModifyModal(index)} className="btn modify-btn">Modify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
