import React, { useState, useEffect } from 'react';
import DynamoDBService from '../services/DynamoDBService';
import './DataList.css';

function DataList() {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await DynamoDBService.getAllData();
      setDataList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Calculate the index of the last item in the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item in the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="data-list" style={{ display: 'flex', justifyContent: 'center' }}>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(dataList.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataList;
