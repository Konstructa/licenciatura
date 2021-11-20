import React from 'react';
import './Adress.css';
import Map from './Map';

function Adress() {
  return (
    <div id='contato' className='area-adress'>
      <div className='area-title-map'>
        <div className='title-map'>
          <h1>Endereço</h1>
          <hr></hr>
        </div>
        <Map></Map>
      </div>
      <div className='adress-info'>
        <div className='title-adress'>
          <h1>INSTITUTO DE COMPUTAÇÃO</h1>
          <hr style={{ height: '4px' }}></hr>
        </div>
        <p>
          Avenida Adhemar de Barros, s/n - Campus de Ondina
          <br />
          CEP: 40.170-110
          <br />
          Salvador - Bahia
          <br />
          Telefone: (71) 3283-6164
        </p>
      </div>
    </div>
  );
}

export default Adress;
