import React from 'react';
import './style.css';
export default function RevenuesCard({ title, result, underline, green }) {
  const defineStyle = () => {
    if (underline && green) return { textDecoration: 'underline', color: 'green' };
    if (underline && !green) return { textDecoration: 'underline' };
    if (!underline && green) return { color: 'green' };
  };
  return (
    <div className='RevenuesCard'>
      <span>{title}</span>
      <p style={underline || green ? defineStyle() : {}}>{result}</p>
    </div>
  );
}
