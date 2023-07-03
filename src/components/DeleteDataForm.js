import React, { useState } from 'react';
import DynamoDBService from '../services/DynamoDBService';

function DeleteDataForm() {
  const [id, setId] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    DynamoDBService.deleteData(id)
      .then(() => {
        console.log('Data deleted successfully');
        setId('');
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div className="create-data-form">
    <form onSubmit={handleDelete}>
      <input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
      <button type="submit">Delete Data</button>
    </form>
    </div>
  );
}

export default DeleteDataForm;
