import React, { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import ShoppingsBoard from '../../components/ShoppingsBoard';
import RevenuesBoard from '../../components/RevenuesBoard';
import dataContext from '../../context/DataContext';
import './style.css';

export default function Overview() {
  const { stores } = useContext(dataContext);

  console.log(stores);
  return (
    <div className='Overview'>
      <h2 className='title-page'>Visão Geral</h2>
      <div className='card-container'>
        <Card title="Total de Lojas" result="7213" />
        <Card title="Faturamento total" result="100.000,00" pink />
        <Card title="Loja destaque" result="Estilo Pri" />
        <Card title="Meta Mensal" result="110.000,00" />
      </div>
      <RevenuesBoard />
      <ShoppingsBoard />
    </div>
  );
}
