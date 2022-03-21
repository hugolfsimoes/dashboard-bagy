import React, { useEffect, useState } from 'react';
import dataContext from './DataContext';
import { getAllStores, getAllgetGeneralInformations, getAllsales, getAllProducts } from '../api';


export default function DataProvider({ children }) {
  const [stores, setStores] = useState([]);
  const [generalInformations, setGeneralInformations] = useState([]);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getStoresRequest();
    getGeneralInformations();
    getSales();
    getProducts();
  }, []);

  const getStoresRequest = async () => {
    const { data } = await getAllStores();
    setStores(data);
  };

  const getGeneralInformations = async () => {
    const { data } = await getAllgetGeneralInformations();
    setGeneralInformations(data[0]);
  };

  const getSales = async () => {
    const { data } = await getAllsales();
    setSales(data);
  };

  const getProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  };

  return (
    <main>
      <dataContext.Provider value={{ stores, generalInformations, sales, products }}>
        {children}
      </dataContext.Provider>
    </main>
  );
}