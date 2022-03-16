import React from 'react';
import './style.css';

export default function Card({ title, result, pink }) {
  return (
    <div className='Card'>
      <h3 style={pink ? { color: '#FC3C8D' } : { color: '#9FA2B4' }}>{title}</h3>
      <p style={pink ? { color: '#FC3C8D' } : { color: '#000000' }}>{result}</p>
    </div >
  );
}
