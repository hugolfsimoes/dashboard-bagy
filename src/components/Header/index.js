import React from 'react';
import searchIcon from '../../assets/images/icons/search.svg';
import alertIcon from '../../assets/images/icons/alert.svg';
import profileImage from '../../assets/images/profile.png';
import verticalLineImage from '../../assets/images/icons/vertical.svg';
import './style.css';

export default function Header({ title }) {
  return (
    <header className='Header'>
      <h2 className='title-page'>{title}</h2>
      <div className='container-profile'>
        <img src={searchIcon} alt="Ícone de pesquisar" />
        <img src={alertIcon} alt="Ícone de alertas" />
        <img src={verticalLineImage} alt="Linha vertical" />
        <p>Matheus Borges</p>
        <img src={profileImage} alt="Foto de perfil" />
      </div>
    </header>
  );
}
