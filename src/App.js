import React from 'react';
import CreateDataForm from './components/CreateDataForm';
import EditDataForm from './components/EditDataForm';
import DataList from './components/DataList';
import DeleteDataForm from './components/DeleteDataForm';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1 align >DynamoDB CRUD operations</h1>
      <CreateDataForm />
      {/* <br></br> */}
      <EditDataForm />
      {/* <br></br> */}
      <DeleteDataForm />
      {/* <br></br> */}
      <DataList />

    </div>
    // <div style={{ textAlign: 'center' }}></div>
  );
}

export default App;
