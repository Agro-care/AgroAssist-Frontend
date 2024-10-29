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
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="text"
            name="farmer_id"
            placeholder="Farmer ID"
            value={product.farmer_id}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={product.location}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="text"
            name="unit"
            placeholder="Unit"
            value={product.unit}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="date"
            name="harvest_date"
            placeholder="Harvest Date"
            value={product.harvest_date ? product.harvest_date.slice(0, 10) : ''}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <button type="button" onClick={handleSaveChanges} className="btn modal-save-btn">Save</button>
          <button type="button" onClick={closeModal} className="btn modal-close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ModifyProductModal;
