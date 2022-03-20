import React, { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import ShoppingsBoard from '../../components/ShoppingsBoard';
import RevenuesBoard from '../../components/RevenuesBoard';
import dataContext from '../../context/DataContext';
import { formatNumbers } from '../../helper/functions';

import './style.css';

export default function Overview() {
  const { generalInformations } = useContext(dataContext);

  const { lojasTotais, faturamentoTotal, destaqueLoja, metaMensal } = generalInformations;
  return (
    <div className='Overview' >
      <h2 className='title-page'>Visão Geral</h2>
      <div className='card-container'>
        <Card title="Total de Lojas"
          result={lojasTotais} />
        <Card title="Faturamento total"
          result={faturamentoTotal && formatNumbers(faturamentoTotal)} pink />
        <Card title="Loja destaque"
          result={destaqueLoja} />
        <Card title="Meta Mensal"
          result={metaMensal && formatNumbers(metaMensal
          )} />
      </div>
      <RevenuesBoard />
      <ShoppingsBoard />
    </div >
  );
}
