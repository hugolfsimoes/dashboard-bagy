import React from 'react';
import PurchaseTable from '../PurchaseTable';
import './style.css';

export default function PurchaseInfo() {
  return (
    <div>
      <PurchaseTable />
      <PurchaseInfo />
    </div>
  );
}
