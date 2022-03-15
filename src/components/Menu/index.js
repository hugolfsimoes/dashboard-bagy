import React from 'react';
import { Link } from 'react-router-dom';

import BagyLogo from '../../assets/images/logo.svg';
import VisaoGeralIcon from '../../assets/images/icons/visao-geral-icon.svg';
import LojasIcon from '../../assets/images/icons/lojas-icon.svg';
import VendasIcon from '../../assets/images/icons/vendas-icon.svg';
import ClientesIcon from '../../assets/images/icons/clientes-icon.svg';
import ProdutosIcon from '../../assets/images/icons/produtos-icon.svg';
import PlanosMetasIcon from '../../assets/images/icons/planos-metas-icon.svg';
import ConfiguracoesIcon from '../../assets/images/icons/configuracoes-icon.svg';
import LogoutIcon from '../../assets/images/icons/logout-icon.svg';
import './style.css';

export default function Menu() {
  const menuItens = ['', '', '', '', '', '', ''];
  return (
    <aside className='Menu'>
      <img className='logo-bagy' src={BagyLogo} alt="Logotipo Dashboard Bagy" />
      <nav>
        <ul>
          <li>
            <Link to="/"> <img className="icons" src={VisaoGeralIcon} alt="Ícone link visão geral" />Visão Geral</Link>
          </li>
          <li>
            <Link to="/lojas"><img className="icons" src={LojasIcon} alt="Ícone link lojas" />Lojas</Link>
          </li>
          <li>
            <Link to="/vendas"><img className="icons" src={VendasIcon} alt="Ícone link vendas" />Vendas</Link>
          </li>
          <li>
            <Link to="/clientes"><img className="icons" src={ClientesIcon} alt="Ícone link clientes" />Clientes</Link>
          </li>
          <li>
            <Link to="/produtos"><img className="icons" src={ProdutosIcon} alt="Ícone link produtos" />Produtos</Link>
          </li>
          <li>
            <Link to="/planos-metas"><img className="icons" src={PlanosMetasIcon} alt="Ícone link planos e metas" />Planos e Metas</Link>
          </li>
          <li>
            <Link to="/configuracoes"><img className="icons" src={ConfiguracoesIcon} alt="Ícone link configuracoes" />Configurações</Link>
          </li>
          <li>
            <Link to="/logout"><img className="icons" src={LogoutIcon} alt="Ícone link sair" />Sair</Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
