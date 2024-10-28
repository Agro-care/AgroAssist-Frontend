import React from 'react';
import Modal from 'react-modal';
import './styles.css';

const AddProductModal = ({ isOpen, closeModal, newProduct, setNewProduct, handleAddProduct, handleSubmit, error }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="modal-title">Add New Product</h2>
      <form onSubmit={handleSubmit} className="modal-form">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Country"
          value={newProduct.country}
          onChange={(e) => setNewProduct({ ...newProduct, country: e.target.value })}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Type"
          value={newProduct.type}
          onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="modal-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleAddProduct} className="btn modal-add-btn">Add Product</button>
        <button type="button" className="btn modal-close-btn" onClick={closeModal}>Close</button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
