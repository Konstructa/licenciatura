import React from 'react';
import Footer from '../Footer/Footer';
import Header from './Header';
import Adress from '../Adress/Adress';
import Footer from '../Footer/Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <div className='content' style={{}}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
