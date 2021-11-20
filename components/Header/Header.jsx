import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import insta from './images/akar-icons_instagram-fill.svg';
import facebook from './images/dashicons_facebook.svg';
import email from './images/ci_mail.svg';
import youtube from './images/bx_bxl-youtube.svg';
import logo from './images/logo_computacao.jpg';
import search from './images/search_icon.svg';
import searchBtn from './images/search_button.svg';

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    updateBodyStyles();
  };

  function updateBodyStyles() {
    if (click == false) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'visible';
    }
  }

  const [onclick, setNav] = useState(false);
  const searchClick = () => {
    setNav(!onclick);
    updateNav();
  };

  function updateNav() {
    if (onclick == false) {
      document.querySelector('.menu').style.display = 'none';
      document.querySelector('.icon-searchBtn').style.display = 'block';
      document.querySelector('.icon-search').style.display = 'none';
    } else {
      document.querySelector('.menu').style.display = 'block';
      document.querySelector('.icon-searchBtn').style.display = 'none';
      document.querySelector('.icon-search').style.display = 'block';
    }
  }

  return (
    <div className='header'>
      <div className='superior-header'>
        <div className='area-redes'>
          <a href='https://www.instagram.com/computacaoufba/'>
            <img src={insta} />
          </a>
          <a href='https://www.facebook.com/computacaoufba'>
            <img src={facebook} />
          </a>
          <a href='https://www.youtube.com/channel/UCU6wWvDsc1FaXJRGoaNHwow'>
            <img src={youtube} />
          </a>
          <a href='mailto:lc@ufba.br'>
            <img src={email} />
          </a>
        </div>
      </div>
      <div className='inferior-header'>
        <div className='area-logo-title'>
          <img src={logo} className='logo' />
          <a href='/'>
            <div>
              <h4>Universidade Federal da Bahia</h4>
              <h2>Licenciatura em Computação</h2>
            </div>
          </a>
        </div>

        <div className='area-navbar'>
          <div className='menu-icon' onClick={handleClick}>
            <i className='fas fa-bars ' />
          </div>
          <nav className='menu' id={click ? 'active' : ''}>
            <ul className='menu-ul'>
              <div className='menu-icon'>
                <i
                  className='fas fa-times fa-lg'
                  style={{ marginRight: '25px' }}
                  onClick={handleClick}
                />
              </div>
              <li className='inicio-li'>
                <Link to='#inicio' onClick={handleClick}>
                  Início
                </Link>
              </li>
              <li className='sub-menu' onClick={handleClick}>
                <a href='#'>Sobre LC</a>
                <ul>
                  <li>
                    <Link to='/apresentacao' onClick={handleClick}>
                      Apresentação e Objetivos
                    </Link>
                  </li>
                  <li>
                    <a href='#'>Perfil de Egresso</a>
                  </li>
                  <li>
                    <a href='#'>Sobre o Curso</a>
                  </li>
                </ul>
              </li>
              <li className='notice-li'>
                <Link to='#noticias' onClick={handleClick}>
                  Notícias
                </Link>
              </li>
              <li>
                <Link to='/' onClick={handleClick}>
                  Corpo Docente
                </Link>
              </li>
              <li>
                <Link to='#contato' onClick={handleClick}>
                  Contato
                </Link>
              </li>

              <li className='search-li' onClick={handleClick}>
                <a href='#'>Pesquisar</a>
              </li>
            </ul>
          </nav>
          <div className='area-search'>
            <input
              className='search-input'
              id={onclick ? 'active-box' : ''}
              placeholder='Pesquisar'
            />
            <img src={search} onClick={searchClick} className='icon-search' />
            <img
              src={searchBtn}
              onClick={searchClick}
              className='icon-searchBtn'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
