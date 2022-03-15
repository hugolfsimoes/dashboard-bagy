import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Menu() {
  const menuItens = ['', '', '', '', '', '', ''];
  return (
    <aside className='Menu'>
      <nav>
        <ul>
          <li>
            <Link to="/">Visão Geral</Link>
          </li>
          <li>
            <Link to="/lojas">Lojas</Link>
          </li>
          <li>
            <Link to="/vendas">Vendas</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/planos-metas">Planos e Metas</Link>
          </li>
          <li>
            <Link to="/configuracoes">Configurações</Link>
          </li>
          <li>
            <Link to="/logout">Sair</Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
