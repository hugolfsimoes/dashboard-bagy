import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './DataContext';
import { getAllStores } from '../api';


export default function DataProvider({ children }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStoresRequest = async () => {
      const { data } = await getAllStores();
      setStores(data);
    };
    getStoresRequest();
  }, []);

  return (
    <main>
      <dataContext.Provider value={{ stores }}>
        {children}
      </dataContext.Provider>
    </main>
  );
}