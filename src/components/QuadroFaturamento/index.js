import React from 'react';
import Chart from '../Chart';
import LegendaEsteMes from '../../assets/images/legenda-este-mes.svg';
import LegendaMesPassado from '../../assets/images/legenda-mes-passado.svg';
import './style.css';
import FaturamentoCards from '../FaturamentoCards';

export default function QuadroFaturamento() {
  return (
    <div className='QuadroFaturamento'>
      <div className='left-side'>
        <div className='container-titulo'>
          <h3>Total de faturamento mensal</h3>
          <p>JULHO 2020</p>
        </div>
        <div className='container-legenda'>
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
      <div className='teste'>
        <FaturamentoCards title="Loja" result="Estilo Pri" />
        <FaturamentoCards title="Mês" result="Julho" />
        <FaturamentoCards title="Ano" result="2020" />
        <FaturamentoCards title="Total de faturamento" result="R$ 45.000,00" />
        <FaturamentoCards title="Análise comparativa" result="Positivo" />
      </div>
    </div>
  );
}
