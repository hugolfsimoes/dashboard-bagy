import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from '../../pages/Overview';
import Stores from '../../pages/Stores';
import Sales from '../../pages/Sales';
import Customers from '../../pages/Customers';
import Products from '../../pages/Products';
import Plans from '../../pages/Plans';
import Settings from '../../pages/Settings';
import Logout from '../../pages/Logout';
import './style.css';
export default function BoardContent() {
  return (
    <div className='BoardContent'>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/products' element={<Products />} />
        <Route path='/Plans' element={<Plans />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}
