import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ScrollToTop from "react-scroll-to-top";
import { UserContext } from '../userContext';
import { baseURL } from '../lib';

const RentalEquipment = () => {
  const [equipmentData, setEquipmentData] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const { user } = useContext(UserContext); // User context to get logged-in user ID
  const [newEquipment, setNewEquipment] = useState({
    name: '',
    description: '',
    rentalPrice: '',
    availabilityStatus: 'available',
    location: '',
    imageUrl: '',
    contact_number: '',
    contact_email: '',
  });
  const [editEquipment, setEditEquipment] = useState(null);

  // Fetch all equipment
  const fetchAllEquipment = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/equipment/all`);
      setEquipmentData(response.data.equipment);
    } catch (error) {
      console.error("Error fetching equipment:", error.message);
    }
  };

  // Fetch equipment uploaded by the logged-in farmer
  const fetchFarmerEquipment = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/equipment/farmer/${user._id}`);
      setEquipmentData(response.data.equipment);
    } catch (error) {
      console.error("Error fetching farmer equipment:", error.message);
    }
  };

  // Add new equipment
  const handleAddEquipment = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/equipment/${user._id}`, newEquipment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEquipmentData([...equipmentData, response.data.equipment]);
      closeAddModal();
    } catch (error) {
      console.error("Error adding equipment:", error.response?.data?.message || error.message);
    }
  };

  // Update equipment
  const handleUpdateEquipment = async () => {
    try {
      const response = await axios.put(`${baseURL}/api/equipment/${editEquipment._id}`, editEquipment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEquipmentData((prevData) =>
        prevData.map((item) =>
          item._id === response.data.equipment._id ? response.data.equipment : item
        )
      );
      closeEditModal();
    } catch (error) {
      console.error("Error updating equipment:", error.response?.data?.message || error.message);
    }
  };

  // Delete equipment
  const handleDeleteEquipment = async (equipmentId) => {
    try {
      await axios.delete(`${baseURL}/api/equipment/${equipmentId}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`, // Include token for authentication
        },
      });
      setEquipmentData((prevData) => prevData.filter((item) => item._id !== equipmentId));
    } catch (error) {
      console.error("Error deleting equipment:", error.response?.data?.message || error.message);
    }
  };

  // Close modals
  const closeAddModal = () => setAddModalOpen(false);
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditEquipment(null);
  };

  // Open edit modal
  const openEditModal = (equipment) => {
    setEditEquipment(equipment);
    setEditModalOpen(true);
  };

  useEffect(() => {
    // Fetch equipment based on user role
    if (user.role === 'farmer') {
      fetchFarmerEquipment();
    } else {
      fetchAllEquipment();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-green-100 py-10 px-6">
      <ScrollToTop smooth />
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Rental Equipment</h2>
      {user.role === 'farmer' && (
        <button
          onClick={() => setAddModalOpen(true)}
          className="mb-8 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transform transition hover:scale-105 duration-300"
        >
          Add Equipment
        </button>
      )}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {equipmentData.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-t-4 border-blue-400">
            <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4 text-center">{item.description}</p>
            <p className="text-lg font-medium text-gray-900 mb-4">Price: ${item.rentalPrice}/day</p>
            <p className={`mb-4 px-4 py-2 rounded-full text-sm font-semibold ${item.availabilityStatus === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {item.availabilityStatus}
            </p>
            {user.role === 'farmer' && (
              <>
                <button
                  onClick={() => openEditModal(item)}
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEquipment(item._id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add Equipment Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Add New Equipment</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.name}
                onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.description}
                onChange={(e) => setNewEquipment({ ...newEquipment, description: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rental Price"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.rentalPrice}
                onChange={(e) => setNewEquipment({ ...newEquipment, rentalPrice: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.location}
                onChange={(e) => setNewEquipment({ ...newEquipment, location: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.imageUrl}
                onChange={(e) => setNewEquipment({ ...newEquipment, imageUrl: e.target.value })}
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.contact_number}
                onChange={(e) => setNewEquipment({ ...newEquipment, contact_number: e.target.value })}
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="mb-2 w-full p-2 border rounded"
                value={newEquipment.contact_email}
                onChange={(e) => setNewEquipment({ ...newEquipment, contact_email: e.target.value })}
              />
              <button
                type="button"
                onClick={handleAddEquipment}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Equipment
              </button>
              <button
                type="button"
                onClick={closeAddModal}
                className="mt-4 ml-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Equipment Modal */}
      {isEditModalOpen && editEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Edit Equipment</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="mb-2 w-full p-2 border rounded"
                value={editEquipment.name}
                onChange={(e) => setEditEquipment({ ...editEquipment, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="mb-2 w-full p-2 border rounded"
                value={editEquipment.description}
                onChange={(e) => setEditEquipment({ ...editEquipment, description: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rental Price"
                className="mb-2 w-full p-2 border rounded"
                value={editEquipment.rentalPrice}
                onChange={(e) => setEditEquipment({ ...editEquipment, rentalPrice: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                className="mb-2 w-full p-2 border rounded"
                value={editEquipment.location}
                onChange={(e) => setEditEquipment({ ...editEquipment, location: e.target.value })}
              />
              <button
                type="button"
                onClick={handleUpdateEquipment}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={closeEditModal}
                className="mt-4 ml-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalEquipment;
