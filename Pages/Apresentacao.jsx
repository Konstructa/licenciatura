import React from 'react';
import returnArrow from '../components/Pag_apresentacao/images/seta_apresent.svg';
import pageImg from '../components/Pag_apresentacao/images/page_img.png';
import Card from '../components/Pag_apresentacao/card';
import '../components/Pag_apresentacao/apresentacao.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Apresentacao() {
  return (
    <div className='apresent-pag'>
      <Header />
      <div className='pag-content'>
        <div className='title-arrow-box'>
          <Link to='/'>
            <button>
              <img src={returnArrow} alt='Seta voltar para Home' />
            </button>
          </Link>
          <div className='title-underline-box'>
            <h1>Apresentação e Objetivos</h1>
            <hr />
          </div>
        </div>
        <div className='img-txt-content-box'>
          <img
            src={pageImg}
            alt='Imagem de representação do curso Licenciatura da Computação'
          />
          <div className='txt-content'>
            <p>
              {' '}
              O curso de Licenciatura em Computação da UFBA têm como objetivo
              principal preparar professores com formação técnica, científica e
              pedagógica específica, capazes de refletir, compreender, planejar
              e desenvolver inovações educacionais com base no uso e no
              desenvolvimento da Computação e suas tecnologias.
            </p>
            <h3>Objetivos específicos:</h3>
            <ul>
              <li>
                <p>
                  Fornecer formação sólida dos conceitos fundamentais
                  indispensáveis para a compreensão dos problemas relacionados
                  com a teoria e a prática de ensino da computação e informática
                  no âmbito da Educação Básica Regular, Profissional,
                  Tecnológica e Corporativa e noutras etapas e modalidades de
                  educação;
                </p>
              </li>
              <li>
                <p>
                  Fornecer formação tecnológica para o desenvolvimento de
                  recursos computacionais voltados à Educação;
                </p>
              </li>
              <li>
                <p>
                  Fornecer formação técnico-pedagógica para atuação como
                  gestores, designers instrucionais/educacionais e professores
                  em diferentes contextos de produção e gestão de ambientes
                  informatizados de EaD e dos cursos online abertos e massivos
                  (MOOC);
                </p>
              </li>
              <li>
                <p>
                  Oferecer formação para a prática da transdisciplinaridade no
                  ensino de computação e no desenvolvimento e gestão de sistemas
                  de informação voltados à educação;
                </p>
              </li>
              <li>
                <p>
                  Oferecer formação para a prática da transdisciplinaridade na
                  gestão de sistemas educacionais; Incentivar o espírito
                  crítico-científico do aluno, sensibilizando-o a participar de
                  projetos de pesquisa;
                </p>
              </li>
              <li>
                <p>
                  Incentivar o espírito crítico-científico do aluno,
                  sensibilizando-o a participar de projetos de pesquisa;
                </p>
              </li>
              <li>
                <p>
                  Incentivar o espírito empreendedor do aluno, sensibilizando-o
                  a participar de projetos de inovação e/ou desenvolvimento
                  tecnológico;
                </p>
              </li>
              <li>
                <p>
                  Incentivar o espírito social, humanístico e colaborativo do
                  aluno, sensibilizando-o a participar de projetos de extensão
                  universitária;
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='info-cards-box'>
        <Card title='Turno' info='Noturno' />
        <Card title='Tipo' info='Licenciatura' />
        <Card title='Modalidade' info='Presencial' />
        <Card title='Periodicidade' info='Anual' />
        <Card title='Carga Horária' info='3141' />
        <Card title='Duração' info='4,5 anos' />
      </div>
      <Footer />
    </div>
  );
}
