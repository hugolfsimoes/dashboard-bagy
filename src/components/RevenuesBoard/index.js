import React, { useContext, useState } from 'react';
import Chart from '../Chart';
import LegendaEsteMes from '../../assets/images/legenda-este-mes.svg';
import LegendaMesPassado from '../../assets/images/legenda-mes-passado.svg';
import './style.css';
import dataContext from '../../context/DataContext';
import { allMonths } from '../../data/months';
import { formatNumbers, getNumberMonth } from '../../helper/functions';

export default function RevenuesBoard() {
  const { stores, sales } = useContext(dataContext);
  const [selectStoreName, setSelectStoreName] = useState('Estilo Pri');
  const [selectMonth, setselectMonth] = useState('Julho');
  const [selectYear, setSelectYear] = useState('2020');

  const getTotalRevenueSelected = () => {
    const storeSelected = stores?.find(store => store.nome === selectStoreName);
    const allSelesSelected = sales?.filter(sale => sale?.loja_id === storeSelected?.id
      && sale.data.split('/')[1] === getNumberMonth(selectMonth)
      && sale.data.split('/')[2] === selectYear)
      .map(selectedSale => selectedSale.valor);
    const totalRevenue = allSelesSelected?.reduce((prev, curr) => prev + curr, 0);
    return totalRevenue;
  };

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
        <div className='RevenuesCard'>
          <span>Loja</span>
          <select name="selectStore"
            defaultValue={stores[0]?.nome}
            id="selectStore"
            value={selectStoreName}
            onChange={e => setSelectStoreName(e.target.value)}>
            {stores.map(store => (
              <option key={store.id} value={store.nome}>{store.nome}</option>
            ))}
          </select>
        </div>
        <div className='RevenuesCard'>
          <span>Mês</span>
          <select
            defaultValue='Junho'
            name="selectMonth"
            id="selectMonth"
            onChange={e => setselectMonth(e.target.value)}>
            {allMonths.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className='RevenuesCard'>
          <span>Ano</span>
          <select defaultValue={2020}
            name="selectYear"
            id="selectYear"
            onChange={e => setSelectYear(e.target.value)}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div className='RevenuesCard'>
          <span>Total de faturamento </span>
          <p>R$ {formatNumbers(getTotalRevenueSelected())}</p>
        </div>
        <div className='RevenuesCard'>
          <span>Análise comparativa </span>
          {getTotalRevenueSelected() > 0 ?
            <p style={{ color: '#219653' }}>Positivo</p> :
            <p style={{ color: '#ea3535' }}>Negativo</p>}
        </div>
      </div>
    </div>
  );
}
