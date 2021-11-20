import React, { useState } from 'react';
import './slide.css';
import slide1 from './images/slide1.png';
import slide2 from './images/slide3.png';
import slide3 from './images/slide2.png';
import slide1Mob from './images/slide1-mob.png';
import slide2Mob from './images/slide2-mob.png';
import slide3Mob from './images/slide3-mob.png';
import nextArrow from './images/right-arrow.svg';
import prevArrow from './images/left-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export default function Slide() {
  return (
    <section id='inicio' className='slider-section'>
      <img src={prevArrow} className='slider-prev-arrow' alt='' />
      <Swiper
        className='swiper'
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.slider-prev-arrow',
          nextEl: '.slider-next-arrow',
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        <SwiperSlide className='slide'>
          <aside>
            <p>
              A LICENCIATURA EM COMPUTAÇÃO, OFERECIDA PELO INSTITUTO DE
              COMPUTAÇÃO (IC) DA UFBA, SE DESTACA ENTRE OS 16 MELHORES DO
              BRASIL, NUMA LISTA COM MAIS DE 60 CURSOS
            </p>
          </aside>
          <img className='img-slide' src={slide1} alt='Slide' />
          <img className='img-slide-mob' src={slide1Mob} alt='Slide' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <aside>
            <p>
              AULA INAUGURAL: "CELEBRAÇÃO DA APROVAÇÃO DO INSTITUTO DE
              COMPUTAÇÃO DA UFBA"
            </p>
            <p>
              Assista{' '}
              <a href='https://www.youtube.com/watch?v=ONyTjRegXOs&t=6915s&ab_channel=InstitutodeComputa%C3%A7%C3%A3o'>
                AQUI
              </a>
            </p>
          </aside>
          <img className='img-slide' src={slide2} alt='Slide' />
          <img className='img-slide-mob' src={slide2Mob} alt='Slide' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <aside>
            <h3>PROFESSORES DCC</h3>
            <p>
              {' '}
              O corpo docente do Departamento de Ciência da Computação é formado
              por pesquisadores com experiência e/ou formação na área de Ciência
              da Computação.
            </p>
          </aside>
          <img className='img-slide' src={slide3} alt='Slide' />
          <img className='img-slide-mob' src={slide3Mob} alt='Slide' />
        </SwiperSlide>
      </Swiper>
      <img src={nextArrow} className='slider-next-arrow' alt='' />
    </section>
  );
}
