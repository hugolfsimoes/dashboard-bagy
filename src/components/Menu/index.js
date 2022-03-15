import React from 'react';
import './style.css';

export default function Menu() {
  const menuItens = ['Visão Geral', 'Lojas', 'Vendas', 'Clientes', 'Produtos', 'Planos e Metas', 'Configurações', 'Sair'];
  return (
    <aside className='Menu'>
      <nav>
        <ul>
          {menuItens.map(item => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
