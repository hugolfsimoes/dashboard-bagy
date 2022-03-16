import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, YAxis } from 'recharts';

export default function Chart() {
  const data = [
    {
      "Este mês": 15,
      "Mês passado": 35,
    },
    {
      "Este mês": 29,
      "Mês passado": 20,
    },
    {

      "Este mês": 50,
      "Mês passado": 34,
    },
    {
      "Este mês": 17,
      "Mês passado": 22,
    },
    {

      "Este mês": 30,
      "Mês passado": 20,
    },
    {
      "Este mês": 48,
      "Mês passado": 40,
    },
    {
      y: 60,
      "Este mês": 38,
      "Mês passado": 35,
    }
  ];

  return (
    <AreaChart width={800} height={355} data={data}
      margin={{ top: 10, right: 0, left: 30, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="###37F3FF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="###37F3FF" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <YAxis orientation='right' type='number' ticks={[0, 10, 20, 30, 40, 50, 60]} tick={{ fontSize: '10px' }} />
      <Tooltip />
      <Area type="monotone" dataKey="Este mês" stroke="#FC3C8D" strokeWidth={2} fillOpacity={0.1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="Mês passado" stroke="#DFE0EB" strokeWidth={2} fillOpacity={0.1} fill="url(#colorPv)" />
    </AreaChart>
  );
}
