import React from 'react';
import './style.css';

export default function TotalShoppingTable() {
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
          <tr>
            <td className='store-name'>Estilo Pri</td>
            <td className='quantity-products'>250 compras</td>
            <td className='price-total-product'>R$ 4238,00</td>
          </tr>
          <hr />
          <tr>
            <td className='store-name'>Vilma Calçados</td>
            <td className='quantity-products'>187 compras</td>
            <td className='price-total-product'>R$ 1005,00</td>
          </tr>
          <hr />
          <tr>
            <td className='store-name'>Mary Lingerie</td>
            <td className='quantity-products'>124 compras</td>
            <td className='price-total-product'>R$ 914,00</td>
          </tr>
          <hr />
          <tr>
            <td className='store-name'>Loja Belíssima</td>
            <td className='quantity-products'>89 compras</td>
            <td className='price-total-product'>R$ 281,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
