import React, { useState } from 'react';
import AddUserModal from './AddUserModal'; // Correct default import
import './styles.css';


const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', type: '' });
  const [search, setSearch] = useState("");
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.type) {
      setError('All fields are required.');
      return;
    }
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '', type: '' });
    setError('');
    closeModal();
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleModifyUser = (index, field, value) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, [field]: value } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="user-info-container">
      <h2 className="section-title">User Information</h2>
      
      <div className="search-form">
        <div className="search-tab">
          <input
            type="text"
            placeholder="Search user ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="add-user-form">
          <button onClick={openModal} className="btn add-btn">Add User</button>
        </div>
      </div>

      {/* Modal for adding a new user */}
      <AddUserModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        newUser={newUser}
        setNewUser={setNewUser}
        handleAddUser={handleAddUser}
        error={error}
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              <td>
                <button onClick={() => handleDeleteUser(index)} className="btn delete-btn">Delete</button>
                <button onClick={() => handleModifyUser(index, 'type', prompt('Enter new type'))} className="btn modify-btn">Modify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
