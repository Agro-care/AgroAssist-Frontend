// ModifyProductModal.js
import React from 'react';
import './styles.css';

const ModifyProductModal = ({ isOpen, closeModal, product, setProduct, handleSaveChanges }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Modify Product</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
            className="modal-input"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={product.country}
            onChange={handleChange}
            className="modal-input"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={product.type}
            onChange={handleChange}
            className="modal-input"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="modal-input"
          />
          <button type="button" onClick={handleSaveChanges} className="btn modal-save-btn">Save</button>
          <button type="button" onClick={closeModal} className="btn modal-close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ModifyProductModal;
