import React, { useContext } from 'react';
import dataContext from '../../context/DataContext';
import './style.css';

export default function TotalShoppingTable() {
  const { stores } = useContext(dataContext);
  return (
    <div className='TotalShoppingTable'>
      <div className='container-title-compras'>
        <div>
          <h3>Total de compras</h3>
          <span>Valor geral 13.250,00</span>
        </div>
        <span>Semanal</span>
      </div>
      <table>
        <tbody>
          {stores?.map((store) => {
            return (
              <tr key={store.id}>
                <td className='store-name'>{store.nome}</td>
                <td className='quantity-products'>{`R$ ${store.vendas} compras`}</td>
                <td className='price-total-product'>{`R$ ${store.valorArrecadado.toFixed(2)}`}</td>
              </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
}
