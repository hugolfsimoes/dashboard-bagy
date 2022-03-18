import React from 'react';
import Chart from '../Chart';
import LegendaEsteMes from '../../assets/images/legenda-este-mes.svg';
import LegendaMesPassado from '../../assets/images/legenda-mes-passado.svg';
import './style.css';
import RevenuesCard from '../RevenuesCard';

export default function RevenuesBoard() {
  return (
    <div className='RevenuesBoard'>
      <div className='left-side'>
        <div className='container-title'>
          <h3>Total de faturamento mensal</h3>
          <p>JULHO 2020</p>
        </div>
        <div className='container-legend'>
          <div>
            <img src={LegendaEsteMes} alt="Legenda este mês" />
            <span>Este mês</span>
          </div>
          <div>
            <img src={LegendaMesPassado} alt="Legenda mês passado" />
            <span>Mês passado</span>
          </div>
        </div>
        <Chart />
      </div>
      <div className='container-revenues-card'>
        <RevenuesCard title="Loja" result="Estilo Pri" underline />
        <RevenuesCard title="Mês" result="Julho" underline />
        <RevenuesCard title="Ano" result="2020" underline />
        <RevenuesCard title="Total de faturamento" result="R$ 45.000,00" />
        <RevenuesCard title="Análise comparativa" result="Positivo" green />
      </div>
    </div>
  );
}
