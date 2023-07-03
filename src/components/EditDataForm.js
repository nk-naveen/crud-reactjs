import React, { useState } from 'react';
import DynamoDBService from '../services/DynamoDBService';
import './CreateDataForm.css';

function EditDataForm() {
  const [id, setId] = useState('');
  const [data, setData] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await DynamoDBService.putData(id, data);
      console.log('Data put successfully');
      setId('');
      setData('');
    } catch (error) {
      console.error('Error putting data:', error);
    }
  };

  return (
    <div className="create-data-form">

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
      <input type="text" placeholder="Data" value={data} onChange={handleDataChange} />
      <button type="submit">Put Data</button>
    </form>
    </div>
  );
}

export default EditDataForm;

