import React from 'react';
import ShoppingsInfo from '../ShoppingsInfo';
import TotalShoppingTable from '../TotalShoppingTable';
import './style.css';

export default function ShoppingsBoard() {
  return (
    <div className='ShoppingsBoard'>
      <TotalShoppingTable />
      <ShoppingsInfo />
    </div>
  );
}
