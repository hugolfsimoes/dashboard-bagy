import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VisaoGeral from '../../pages/VisaoGeral';
import Lojas from '../../pages/Lojas';
import Vendas from '../../pages/Vendas';
import Clientes from '../../pages/Clientes';
import Produtos from '../../pages/Produtos';
import PlanosMetas from '../../pages/PlanosMetas';
import Configuracoes from '../../pages/Configuracoes';
import Logout from '../../pages/Logout';
import './style.css';
export default function Board() {
  return (
    <div className='Board'>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
        <Route path='/lojas' element={<Lojas />} />
        <Route path='/vendas' element={<Vendas />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/planos-metas' element={<PlanosMetas />} />
        <Route path='/configuracoes' element={<Configuracoes />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}
