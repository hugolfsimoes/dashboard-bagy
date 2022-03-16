import React from 'react';
import Card from '../../components/Card';
import QuadroFaturamento from '../../components/QuadroFaturamento';

export default function VisaoGeral() {
  return (
    <div>
      <h2 className='title-page'>Visão Geral</h2>
      <div className='card-container'>
        <Card title="Total de Lojas" result="7213" />
        <Card title="Faturamento total" result="100.000,00" pink />
        <Card title="Loja destaque" result="Estilo Pri" />
        <Card title="Meta Mensal" result="110.000,00" />
      </div>
      <QuadroFaturamento />
    </div>
  );
}
