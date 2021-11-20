import React from 'react';
import SaibaMais from '../components/Secao_saiba_mais/saiba-mais';
import Slide from '../components/Secao_slide/slide';
import Header from '../components/Header/Header';
import Notices from '../components/Notices/Notices';
import Adress from '../components/Adress/Adress';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Slide />
      <SaibaMais />
      <Notices />
      <Adress />
      <Footer />
    </div>
  );
}
