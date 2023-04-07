import React from 'react';
import './Header.css';
import Menu from './topheader/menu/Menu'
import Regester from './topheader/regester/Regester'
import MainHeaderContent from './mainheader/mainheader-content/MainHeaderContent';
import BottomHeaderContent from './bottomheader/BottomHeaderContent'

function Header() {
  return (
    <header className='header'>
        <div className='header__top'>
            <Menu/>
            <Regester/>
        </div>
        <div className='header__main'>
            <MainHeaderContent/>
        </div>
        <div className='header__bottom'>
          <BottomHeaderContent/>
        </div>
    </header>
  )
}

export default Header 