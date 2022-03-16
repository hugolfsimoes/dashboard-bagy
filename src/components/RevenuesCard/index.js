import React from 'react';
import './style.css';
export default function RevenuesCard({ title, result }) {
  return (
    <div className='RevenuesCard'>
      <span>{title}</span>
      <p>{result}</p>
    </div>
  );
}
