import React, { useState } from 'react';
import './Notices.css';
import CardNotice from './CardNotice';
import bolsa from './images/bolsa.jpg';
import edital from './images/edital.jpg';
import maratona from './images/maratona.jpg';
import monitoria from './images/monitoria.jpg';

function Notices() {
  return (
    <div id='noticias' className='section-notice'>
      <div className='notice-title'>
        <h1>Últimas Notícias</h1>
        <hr />
      </div>
      <div className='div-cards'>
        <CardNotice
          img={monitoria}
          info='EDITAL INTERNO Nº 003/2021 SELEÇÃO PARA MONITORIA COM BOLSA E VOLUNTÁRIA EM PROJETOS ACADÊMICOS'
          data='22/07/2021 - 16:15'
        />
        <CardNotice
          img={edital}
          info='Edital PGCOMP-04/2021 - Processo Seletivo de Aluno Especial Mestrado e Doutorado'
          data='15/07/2021 - 14:20'
        />
        <CardNotice
          img={maratona}
          info='SOMOS MEDALHA DE OURO NA MARATONA DE PROGRAMAÇÃO DA SBC!'
          data='14/07/2021 - 12:47'
        />
        <CardNotice
          img={bolsa}
          info='SELEÇÃO PARA MONITORIA COM BOLSA E VOLUNTÁRIA EM PROJETOS ACADÊMICOS'
          data='15/07/2021 - 14:20'
        />
      </div>
      <div className='div-btn'>
        <a href='https://encurtador.com.br/lxyE2'>
          <button className='notice-btn'>Mais Notícias</button>
        </a>
      </div>
    </div>
  );
}

export default Notices;
