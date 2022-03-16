import React from 'react';
import './style.css';
export default function FaturamentoCards({ title, result }) {
  return (
    <div className='FaturamentoCards'>
      <span>{title}</span>
      <p>{result}</p>
    </div>
  );
}
