import React, { useContext } from 'react';
import dataContext from '../../context/DataContext';
import { formatNumbers } from '../../helper/functions';
import './style.css';

export default function TotalShoppingTable() {
  const { stores } = useContext(dataContext);
  return (
    <div className='TotalShoppingTable'>
      <div className='container-title-compras'>
        <div>
          <h3>Total de compras</h3>
          <p>Valor geral 13.250,00</p>
        </div>
        <span>Semanal</span>
      </div>
      <table>
        <tbody>
          {stores?.map((store) => (
            <tr key={store.id}>
              <td className='store-name'>{store.nome}</td>
              <td className='quantity-products'>{`${store.vendas} compras`}</td>
              <td className='price-total-product'>{`R$ ${formatNumbers(store.valorArrecadado)}`}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  );
}
