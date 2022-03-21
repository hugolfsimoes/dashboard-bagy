import React, { useContext } from 'react';
import dataContext from '../../context/DataContext';
import { formatNumbers } from '../../helper/functions';
import './style.css';

export default function ShoppingsInfo() {
  const { stores, products } = useContext(dataContext);

  const getStoreNameById = (id) => {
    const store = stores?.find(store => store?.id === id);
    return store.nome;
  };
  return (
    <div className='ShoppingsInfo'>
      <table>
        <thead>
          <tr className='table-headers'>
            <td className='header-product'>Produto</td>
            <td className='header-store'>Loja</td>
            <td className='header-value'>Preço</td>
            <td className='header-date'>Data</td>
          </tr>
        </thead>
        <tbody>
          {products?.map(product => (
            <tr key={product.id} className='table-body'>
              <td className='product-name-colunm'>{product?.produtoNome}</td>
              <td className='product-store-colunm'>{getStoreNameById(product?.store_id)}</td>
              <td className='product-value-colunm'>{`R$ ${formatNumbers(product?.preco)}`}</td>
              <td className='product-date-colunm'>{product?.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
